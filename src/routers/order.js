const express = require('express')

const Order = require('../models/order')

const router = express.Router()

router.post('/order', (req, res) => {
    Order.create(req.body).then(() => {
        res.send(req.body)
    }).catch((e) => {
        res.status(400).send(false)
    })
})

module.exports = router