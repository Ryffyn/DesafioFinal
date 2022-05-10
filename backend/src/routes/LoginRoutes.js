const express = require('express')
const LoginController = require('../controllers/LoginController')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', LoginController.post)

module.exports = router