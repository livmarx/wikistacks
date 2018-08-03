const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layoutViews = require('./views/layout');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  console.log('Hello World!');
  res.send(layoutViews(''));
});

app.listen(3000, () => {
  console.log('listening');
});
