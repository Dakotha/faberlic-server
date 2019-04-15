const express = require('express')

const Order = require('../models/order')
const auth = require('../middleware/auth')
const email = require('../emails/account')

const router = new express.Router()

// Create order
router.post('/order', (req, res) => {
    Order.create(req.body).then(response => {
        email.sendOrderEmail(req.body)
        res.send({ orderNumber: response.orderNumber })
    }).catch(err => {
        res.status(400).send({ error: err.name })
        // TODO: Store full error in log file
    })
})

// Get all orders
router.get('/orders', auth, (req, res) => {
    Order.find({}).then(response => {
        res.send(response)
    }).catch(err => {
        res.status(401).send({ error: err.name })
        // TODO: Store full error in log file
    })
})

module.exports = router