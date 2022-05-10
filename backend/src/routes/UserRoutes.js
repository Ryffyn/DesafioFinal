const express = require('express')
const UserController = require('../controllers/UserController')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/',  UserController.get)

router.get('/:id', UserController.getOne)

router.post('/', UserController.post)

router.delete('/:id', UserController.delete)


module.exports = router

