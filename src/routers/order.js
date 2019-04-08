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

router.get('/order', (req, res) => {
    Order.find({}).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router