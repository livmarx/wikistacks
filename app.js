const express = require('express');
const app = express();
const morgan = require('morgan');
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
  layOut,
} = require('./views');
const models = require('./models'); // Ask why
const userRoutes = require('./routes/user');
const wikiRoutes = require('./routes/wiki');

app.use('/user', userRoutes);
app.use('/wiki', wikiRoutes);
app.get('/', (req, res) => {
  res.redirect('/wiki');
});

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res, next) => {
  console.log('Hello World!');
  res.send(layoutViews(''));
});

const init = async () => {
  await models.db.sync({ force: true });
  app.listen(3000, () => {
    console.log('listening');
  });
};

init();

models.db.authenticate().then(() => {
  console.log('connected to the database');
});
