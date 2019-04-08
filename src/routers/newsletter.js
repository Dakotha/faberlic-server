const express = require('express')

const Newsletter = require('../models/newsletter')

const router = new express.Router()

router.post('/newsletter', (req, res) => {
    Newsletter.create(req.body).then((response) => {
        res.send(`Response: ${response.email}`)
    }).catch((err) => {
        res.status(400).send(`Problem: ${err}`)
    })
})

module.exports = router