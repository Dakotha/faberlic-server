const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('../config.json')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, config.jwt.secretKey)
        const user = await User.findOne({ email: decoded.email, 'token': token })

        if (!user) throw new Error()

        next()
    } catch (err) {
        res.status(401).send({ error: 'Unauthorized' })
        // TODO: Store full error in log file
    }
}

module.exports = auth