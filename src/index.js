const express = require('express')

require('./database/init')
const indexRouter = require('./routers/index')
const orderRouter = require('./routers/order')
const quoteRouter = require('./models/quote')

const app = express()

const port = process.env.port || 3000

app.use(express.json())

app.use(indexRouter)
app.use(orderRouter)
app.use(quoteRouter)
app.use('*', (req, res) => res.status(404).send('Page Not Found.'))

app.listen(port, () => console.log('Server is running on port', port))