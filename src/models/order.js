const mongoose = require('mongoose')

const orderShema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    products: {
        productName: {
            type: String
        },
        productId: {
            type: String
        },
        productQuantity: {
            type: String
        }
    }
})

const Order = new mongoose.model('Order', orderShema)

module.exports = Order