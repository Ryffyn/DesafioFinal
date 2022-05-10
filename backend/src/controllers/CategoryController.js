const ResponseBuilder = require('../utils/ResponseBuilder')
const CategoryRepository = require('../repositories/CategoryRepository')
  
const categoryRepository = new CategoryRepository()


class CategoryController{


  async  get(request, response) {
        try {
            let find =  await categoryRepository.selectAll()
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
          const findOne= await categoryRepository.selectByFilter({id:id})
    
          const categorysLinks = findOne.map(category => {
            return {
              ...category,
              links: [
                {
                  rel: 'self',
                  uri: `http://localhost:3333/category/${category.id}`,
                  type: 'GET'
                },
                {
                  rel: 'update',
                  uri: `http://localhost:3333/category/${category.id}`,
                  type: 'PUT'
                },
                {
                  rel: 'delete',
                  uri: `http://localhost:3333/category/${category.id}`,
                  type: 'DELETE'
                }
              ]
            }
          })
    
          const responseContent = ResponseBuilder.createResponseContent(categorysLinks)
    
          return response.status(200).json(responseContent)
        } catch (error) {
          const responseErrors = ResponseBuilder.createResponseErrors([ error.message ])
    
          return response.status(400).json(responseErrors)
        }
      }


     async post(request, response) {
        try {
          const category = request.body
          let create =  await categoryRepository.add(category)
      
          return response.status(201).json(create)
        } catch (error) {
          return response.status(400).json({ mensagem: error.message })
        }
      }


     async delete(request, response) {
        try {
            const categoryId = request.params.id
  
            let remove =  await categoryRepository.remove(categoryId)
      
          return response.status(200).json({ mensagem: 'Device removed successfully, id:' + categoryId })
        } catch (error) {
          return response.status(400).json({ mensagem: error.message })
        }
      }
      

   
}

module.exports = new CategoryController()