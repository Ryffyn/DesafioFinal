require('dotenv').config({
    path: process.env.NODE_ENV === 'test'? '.env' : '.env'
})
const express = require('express')
const cors = require('cors')
const { registerRoutes } = require('./routes')
const userDefault = require('./config/userDefault')



// Iniciar express
const app = express()

// Configurar JSON para express
app.use(express.json())

app.use(cors())


// Configurar rotas
registerRoutes(app)



module.exports = app