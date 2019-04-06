const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

require('./database/init')
const indexRouter = require('./routers/index')
const orderRouter = require('./routers/order')
const quoteRouter = require('./routers/quote')

const app = express()

const port = process.env.port || 3000
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())

app.use(indexRouter)
app.use(orderRouter)
app.use(quoteRouter)
app.use('*', (req, res) => res.status(404).send('Page Not Found.'))

app.listen(port, () => console.log('Server is running on port', port))