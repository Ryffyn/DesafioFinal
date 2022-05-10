const ResponseBuilder = require('../utils/ResponseBuilder')
const DeviceRepository = require('../repositories/DeviceRepository')
  
const deviceRepository = new DeviceRepository()


class DevicesController{
  async  get(request, response) {
        try {
            let find =  await deviceRepository.selectAll()
             const responseContent = ResponseBuilder.createResponseContent(find)
              return response.status(200).json(responseContent)   
            
        } catch (error) {
            const responseErrors = ResponseBuilder.createResponseErrors([ error.message ])
            return response.status(400).json(responseErrors)
        }
    }


    
  async  getOne(request, response) {
        try {
          const id = request.params.id
          const findOne= await deviceRepository.selectByFilter({id:id})
    
          const devicesLinks = findOne.map(device => {
            return {
              ...device,
              links: [
                {
                  rel: 'self',
                  uri: `http://localhost:3333/devices/${device.id}`,
                  type: 'GET'
                },
                {
                  rel: 'update',
                  uri: `http://localhost:3333/devices/${device.id}`,
                  type: 'PUT'
                },
                {
                  rel: 'delete',
                  uri: `http://localhost:3333/devices/${device.id}`,
                  type: 'DELETE'
                }
              ]
            }
          })
    
          const responseContent = ResponseBuilder.createResponseContent(devicesLinks)
    
          return response.status(200).json(responseContent)
        } catch (error) {
          const responseErrors = ResponseBuilder.createResponseErrors([ error.message ])
    
          return response.status(400).json(responseErrors)
        }
      }


     async post(request, response) {
        try {
          const device = request.body
          let create =  await deviceRepository.add(device)
      
          return response.status(201).json(create)
        } catch (error) {
          return response.status(400).json({ mensagem: error.message })
        }
      }


     async delete(request, response) {
        try {
            const deviceId = request.params.id
  
            let remove =  await deviceRepository.remove(deviceId)
      
          return response.status(200).json({ mensagem: 'Device removed successfully, id:' + deviceId })
        } catch (error) {
          return response.status(400).json({ mensagem: error.message })
        }
      }
      

   
}

module.exports = new DevicesController()