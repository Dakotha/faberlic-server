const express = require('express')

const Newsletter = require('../models/newsletter')

const router = new express.Router()

router.post('/newsletter', (req, res) => {
    Newsletter.create(req.body).then(() => {
        res.send(req.body)
    }).catch((err) => {
        res.status(400).send(false)
    })
})

module.exports = router