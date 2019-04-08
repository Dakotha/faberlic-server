const express = require('express')

const Order = require('../models/order')

const router = new express.Router()

router.post('/order', (req, res) => {
    Order.create(req.body).then((response) => {
        res.send(`Response: ${response.orderNumber}`)
    }).catch((err) => {
        res.status(400).send(`Problem: ${err}`)
    })
})

module.exports = router