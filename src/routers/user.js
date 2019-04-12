const express = require('express')
const bcrypt = require('bcrypt')

const User = require('../models/user')

const router = express.Router()

router.post('/register', (req, res) => {
    User.create(req.body).then(response => {
        res.send({ status: 'OK' })
    }).catch(err => {
        res.status(400).send({ error: err.name })
        // TODO: Store full error in log file
    })
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) throw new Error()

        const auth = await bcrypt.compare(req.body.password, user.password)
            
        if (!auth) throw new Error()

        res.send(user)
    } catch (err) {
        res.status(401).send({ error: 'Unauthorized' })
        // TODO: Store full error in log file
    }
})

module.exports = router