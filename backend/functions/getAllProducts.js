// backend/functions/getAllProducts.js
const product = require('../models/productModel');

exports.handler = async (event, context) => {
  try {
    const data = await product.find();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error when fetching all products' })
    };
  }
};
