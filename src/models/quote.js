const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    author: {
        type: String
    },
    subject: {
        type: String
    },
    text: {
        type: String
    }
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote