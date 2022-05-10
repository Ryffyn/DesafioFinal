const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/', auth,  CategoryController.get)

router.get('/:id', CategoryController.getOne)

router.post('/', CategoryController.post)

router.delete('/:id', CategoryController.delete)



module.exports = router