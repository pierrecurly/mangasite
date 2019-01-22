const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRouter');
const mangaRouter = require('./routes/mangaRouter');
const genreRouter = require('./routes/genreRouter')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// database config
var mongoDB = 'mongodb://localhost:27017/mangasite';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/manga', mangaRouter);
app.use('/genre', genreRouter);

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});