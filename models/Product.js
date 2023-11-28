const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    _id: {
      type: String
    },
    name: {
      type: String,
      required: [true, 'Product name is required']
    },
    price: {
      type: Number
    },
    image: {
      type: String
    },
    isWishlited: {
      type: Boolean
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Product', productSchema)
