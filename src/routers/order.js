const express = require('express')

const router = express.Router()

router.post('/order', async (req, res) => {
    try {
        res.send(req.body)
    } catch {
        res.status(401).send()
    }
})

module.exports = router