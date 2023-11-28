const express = require('express')
const { createPayment, getPayment } = require('../controllers/payment.js')

const router = express.Router()

router.post('/', createPayment)
router.get('/:id', getPayment)

module.exports = router
