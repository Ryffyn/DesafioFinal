const ResponseBuilder = require('../utils/ResponseBuilder')
const UserRepository = require('../repositories/UserRepository')
const bcrypt = require('bcryptjs')
  
const userRepository = new UserRepository()


class UserController{
  async  get(request, response) {
        try {
            let find =  await userRepository.selectAll()
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
          const findOne= await userRepository.selectByFilter({id:id})
    
          const devicesLinks = findOne.map(user => {
            return {
              ...user,
              links: [
                {
                  rel: 'self',
                  uri: `http://localhost:3333/devices/${user.id}`,
                  type: 'GET'
                },
                {
                  rel: 'update',
                  uri: `http://localhost:3333/devices/${user.id}`,
                  type: 'PUT'
                },
                {
                  rel: 'delete',
                  uri: `http://localhost:3333/devices/${user.id}`,
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
          
          const user = request.body

          const salt = bcrypt.genSaltSync(10);
           user.password = await bcrypt.hash(user.password, salt)
          
           //user.password= hash;
           //console.log(hash)
  

          let create =  await userRepository.add(user)

      
          return response.status(201).json(create)
        } catch (error) {
          return response.status(400).json({ mensagem: error.message })
        }
      }


     async delete(request, response) {
        try {
            const deviceId = request.params.id
  
            let remove =  await userRepository.remove(deviceId)
      
          return response.status(200).json({ mensagem: 'user removed successfully, id:' + deviceId })
        } catch (error) {
          return response.status(400).json({ mensagem: error.message })
        }
      }
      

   
}

module.exports = new UserController()