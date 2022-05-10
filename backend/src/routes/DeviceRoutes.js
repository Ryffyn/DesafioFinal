const express = require('express')
const DevicesController = require('../controllers/DevicesController')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/',  DevicesController.get)

router.get('/:id', DevicesController.getOne)

router.post('/', DevicesController.post)

router.delete('/:id', DevicesController.delete)



module.exports = router