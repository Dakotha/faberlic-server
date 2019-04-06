const express = require('express')

const quotesController = require('../controllers/quote')

const router = express.Router()

router.get('/', quotesController.getAllQuotes)

module.exports = router