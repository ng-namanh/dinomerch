const express = require('express')
const { getProduct, getProducts } = require('../controllers/product')

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProduct)

module.exports = router
