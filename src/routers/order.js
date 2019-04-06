const express = require('express')

const Order = require('../models/order')

const router = express.Router()

router.post('/order', (req, res) => {
    Order.create(req.body).then((res) => {
        console.log(res)
    }).catch((e) => {
        console.log(e)
    })
})

module.exports = router