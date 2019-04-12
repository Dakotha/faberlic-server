const mongoose = require('mongoose')

const config = require('../config.json')

mongoose.connect(`mongodb://${config.database.host}/${config.database.dbname}`, { useNewUrlParser: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('database up')
});