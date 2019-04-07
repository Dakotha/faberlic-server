const monogoose = require('mongoose')
const validator = require('validator')

const newsletterShcema = new monogoose.Schema({
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Podałaś niewłaściwy adres email.')
        }
    }
})

const Newsletter = new monogoose.model('Newsletter', newsletterShcema)

module.exports = Newsletter