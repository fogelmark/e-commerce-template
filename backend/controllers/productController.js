const router = require('express').Router()
// const auth = require('../authentication/auth')

const productModel = require('../models/productModel')

router.get('/', productModel.getAllProducts)
router.get('/:id', productModel.findProduct)

router.post('/', productModel.createProduct)

router.delete('/:id', productModel.deleteProduct)

router.put('/:id', productModel.updateProduct)

module.exports = router