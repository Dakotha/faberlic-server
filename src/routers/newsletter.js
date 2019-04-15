const express = require('express')

const Newsletter = require('../models/newsletter')
const email = require('../emails/account')

const router = new express.Router()

router.post('/newsletter', (req, res) => {
    Newsletter.create(req.body).then(response => {
        email.sendWelcomNewsletterEmail(req.body.email)
        res.send({ status: 'OK' })
    }).catch(err => {
        res.status(400).send({ error: err.name })
        // TODO: Store full error in log file
    })
})

module.exports = router