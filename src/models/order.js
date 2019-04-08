const mongoose = require('mongoose')
const validator = require('validator')
const uniqid = require('uniqid')

const orderShema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        default: uniqid.time()
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error()
        }
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    products: {
        productName: {
            type: String,
            required: true
        },
        productId: {
            type: String,
            required: true
        },
        productQuantity: {
            type: Number,
            required: true
        }
    }
})

const Order = new mongoose.model('Order', orderShema)

module.exports = Order