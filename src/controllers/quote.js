const Quote = require('../models/quote')

exports.getAllQuotes = (req, res, next) => {
    Quote.find({}).then((quotes) => {
        // res.send(quotes)
        res.render('index', { quotes })
    }).catch((e) => {

    })
}