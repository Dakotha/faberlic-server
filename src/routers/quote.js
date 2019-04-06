const express = require('express')

const Quote = require('../models/quote')

const router = express.Router()

router.post('/quote', async (req, res) => {
    try {
        const quote = await Quote.create(req.body)
        res.send(req.body)
    } catch (e) {
        res.status(401).send(e)
    }
})

router.get('/quotes', async (req, res) => {
    try {
        const quotes = await Quote.find({})
        res.send(quotes)
    } catch (e) {
        res.status(401).send(e)
    }
})

module.exports = router