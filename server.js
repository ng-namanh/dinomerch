require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')
const productRoutes = require('./routes/product')
const paymentRoutes = require('./routes/payment')
const errorHandler = require('./middlewares/error')

connectDB()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/payment', paymentRoutes)

app.use(errorHandler)

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
)

process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`)
  server.close(() => process.exit(1))
})
