const Payment = require('../models/Payment.js')

const createPayment = async (req, res, next) => {
  const {
    firstName,
    lastName,
    phone,
    address,
    cardName,
    cardNumber,
    expDate,
    cvv,
    numberOfItems,
    orderTotal
  } = req.body
  try {
    const payment = await Payment.create({
      firstName,
      lastName,
      phone,
      address,
      cardName,
      cardNumber,
      expDate,
      cvv,
      numberOfItems,
      orderTotal
    })

    res.status(200).json({
      success: true,
      data: payment
    })
  } catch (error) {
    console.log(error)
    return next(error)
  }
}

const getPayment = async (req, res, next) => {
  const { id } = req.params
  try {
    const payment = await Payment.findById(id)

    if (!payment) {
      res.status(404)
      return next(new Error('Payment not found'))
    }

    res.status(200).json({
      success: true,
      payment: payment
    })
  } catch (error) {
    console.log(error)
    return next(error)
  }
}

module.exports = {
  createPayment,
  getPayment
}
