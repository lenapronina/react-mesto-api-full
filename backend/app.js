// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const { login, createUser } = require('./controllers/users.js');
const auth = require('./middlewares/auth');

const app = express();
const { PORT = 3000 } = process.env;

app.options('*', cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  next();
});

// connect to local mongo database
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// middleware for processing POST requests
app.use(bodyParser.json());

app.post('/signup', createUser);
app.post('/signin', login);

app.use('/users', auth, usersRouter);

app.use('/cards', auth, cardsRouter);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening ${PORT}`);
});
