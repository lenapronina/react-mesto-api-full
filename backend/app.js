const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const app = express();
const { PORT = 3000 } = process.env;

// connect to local mongo database
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// middleware for processing POST requests
app.use(bodyParser.json());

// temporary solution for authorization
app.use((req, res, next) => {
  req.user = {
    _id: '5ff44598c054342f03beb755',
  };
  next();
});

app.use('/users', usersRouter);

app.use('/cards', cardsRouter);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening ${PORT}`);
});
