const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./database/init')
const indexRouter = require('./routers/index')
const orderRouter = require('./routers/order')
const newsletterRouter = require('./routers/newsletter')

const app = express()

const port = process.env.port || 3000
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())

// Set up a whitelist and check against it:
var whitelist = ['http://faberlic.ostroleka.pl']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// Then pass them to cors:
app.use(cors(corsOptions));

// app.use(cors())

// // Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.use(indexRouter)
app.use(orderRouter)
app.use(newsletterRouter)
app.use('*', (req, res) => res.status(404).render('404'))

app.listen(port, () => console.log('Server is running on port', port))