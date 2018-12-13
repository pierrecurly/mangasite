const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRouter');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// database config
// var mongoDB = 'mongodb://johnpierrecena:Annarasumanara1@ds253203.mlab.com:53203/manga_panda';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', homeRouter);
 
app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});