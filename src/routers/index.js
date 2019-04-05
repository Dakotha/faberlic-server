const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Strona: api.faberlic.ostroleka.pl')
})

module.exports = router