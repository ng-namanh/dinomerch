const Product = require('../models/Product.js')

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find()

    res.status(200).json({
      success: true,
      data: products
    })
  } catch (error) {
    console.log(error)
    return next(error)
  }
}

const getProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    const product = await Product.findById(id)

    if (!product) {
      res.status(404)
      return next(new Error('Product not found'))
    }

    res.status(200).json({
      success: true,
      product: product
    })
  } catch (error) {
    console.log(error)
    return next(error)
  }
}

module.exports = {
  getProduct,
  getProducts
}
