const express = require('express')

const Quote = require('./models/quote.js')

const router = express.Router()

router.post('/quote', async (req, res) => {
    try {
        // console.log(req.body)
        const quote = await Quote.create(req.body)
        res.send(quote)
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