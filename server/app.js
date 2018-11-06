var express = require('express');
var app = express();
var homeRouter = require('./routes/home');
var cors = require('cors')

app.use(cors())
app.use('/home', homeRouter);
app.get('/', (req, res) => {

});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});