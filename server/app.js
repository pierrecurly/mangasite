var express = require('express');
var app = express();
var homeRouter = require('./routes/home');

app.use('/home', homeRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});