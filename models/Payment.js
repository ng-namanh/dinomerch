const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cardName: {
    type: String,
    required: true
  },
  cardNumber: {
    type: Number,
    required: true
  },
  expDate: {
    type: String,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },
  numberOfItems: {
    type: Number,
    required: true
  },
  orderTotal: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Payment', PaymentSchema)
