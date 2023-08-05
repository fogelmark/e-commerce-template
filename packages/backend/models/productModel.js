const product = require('../schemas/productSchema')

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, imageURL } = req.body
  
    if (!name || !description || !price || !imageURL) {
      return res.status(404).json({
        message: 'Could not create product'
      })
    }
    
    const data = await product.create({ name, description, price, imageURL })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'Error when creating product'
    })
  }
}

// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
  try {
    const data = await product.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'Error when fetching all products'
    })
  }
}

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'Error when deleting product'
    })
  }
}

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const data = await product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'Error when updating product'
    })
  }
}

// FIND PRODUCT BY ID
exports.findProduct = async (req, res) => {
  try {
    const data = await product.findById(req.params.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      message: 'Error when finding product'
    })
  }
}