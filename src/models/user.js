const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error()
        }
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    token: {
        type: String,
    }
})

// TODO: remember and fix update problem
userShema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 8)
    this.token = await jwt.sign({ email: this.email}, 'thisisspartasecretkey')
    this.role = 'user'
    next()
})

const User = mongoose.model("User", userShema)

module.exports = User