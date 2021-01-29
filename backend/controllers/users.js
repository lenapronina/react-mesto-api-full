const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const manageErrorStatus = require('../helpers/manageErrorStatus');
const User = require('../models/user');
const { SALT_ROUNDS } = require('../configs');

// create new user
const createUser = (req, res) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Нужны почта и пароль' });
  }

  return User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(401).send({ message: 'Пользователь с таким email уже существует' });
      }
      return bcrypt.hash(password, SALT_ROUNDS)
        .then((hash) => User.create({
          name,
          about,
          avatar,
          email,
          password: hash,
        }))
        .then((data) => res.status(200).send({ email: data.email }))
        .catch((err) => manageErrorStatus(res, err));
    })
    .catch((err) => res.send(err));
};

const login = (req, res) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

// get all users
const getUsers = (req, res) => User.find({})
  .then((users) => res.status(200).send(users))
  .catch((err) => manageErrorStatus(res, err));

// get one user selected by id
const getUser = (req, res) => User.findById(req.user._id)
  .orFail(new Error('FindIdError'))
  .then((user) => res.status(200).send(user))
  .catch((err) => manageErrorStatus(res, err, 'пользователя'));

// update profile data, use userId from app.js
const patchProfile = (req, res) => {
  const { name, about } = req.body;
  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail(new Error('FindIdError'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      manageErrorStatus(res, err);
    });
};

// update profile avatar, use userId from app.js
const patchAvatar = (req, res) => {
  const { avatar } = req.body;
  return User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail(new Error('FindIdError'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      manageErrorStatus(res, err);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  login,
  patchProfile,
  patchAvatar,
};
