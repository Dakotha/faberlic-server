const monogoose = require('mongoose')
const validator = require('validator')

const newsletterSchema = monogoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error()
        }
    },
    registeredAt: {
        type: Date,
        default: new Date()
    }
})

const Newsletter = new monogoose.model('Newsletter', newsletterSchema)

module.exports = Newsletter