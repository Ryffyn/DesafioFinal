const ResponseBuilder = require('../utils/ResponseBuilder')
const jwt = require('jsonwebtoken')
const autenticacao = require('../config/autenticacao')
const bcrypt = require('bcryptjs')
const UserRepository = require('../repositories/UserRepository')    
const userRepository = new UserRepository()


class LoginController{


     async post(request, response) {
        const { username, password } = request.body
        let usernameDB=''
        let passwordDB=''
        let userId=''
          
        const findOne= await userRepository.selectByFilter({username:username})
      
        findOne.forEach(function(user) {
            usernameDB = user.username
            passwordDB = user.password
            userId= user.id
           
        })

        console.log(usernameDB)

        const checkPassword = await  bcrypt.compare(password, passwordDB)
    
        if (username === usernameDB && checkPassword) {
            const token = jwt.sign({ username, data: Date.now().toString() }, autenticacao.secreteKey, autenticacao.options)

            return response.status(200).json({ usuario: { username }, token })
        }

        return response.status(400).json({ mensagem: 'Login e/ou senha incorretos' })
     }

}

module.exports = new LoginController()