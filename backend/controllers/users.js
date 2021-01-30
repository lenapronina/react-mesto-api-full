const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { SALT_ROUNDS } = require('../configs');

const ConflictError = require('../errors/ConflictError');

const createUser = (req, res) => {
  const { email, password } = req.body;

  res.status(200).send({ email });

  // return User.findOne({ email })
  //   .then((user) => {
  //     if (user) {
  //       throw new ConflictError('Пользователь с таким email уже существует');
  //     }
  //     // return bcrypt.hash(password, SALT_ROUNDS)
  //     //   .then((hash) => User.create({
  //     //     name,
  //     //     about,
  //     //     avatar,
  //     //     email,
  //     //     password: hash,
  //     //   }))
  //     //   .then((data) => res.status(200).send({ email: data.email }))
  //     //   .catch(next);
  //   })
  //   .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};

// get all users
const getUsers = (req, res, next) => User.find({})
  .then((users) => res.status(200).send(users))
  .catch(next);

// get one user selected by id
const getUser = (req, res, next) => User.findById(req.user._id)
  .orFail(new Error('FindIdError'))
  .then((user) => res.status(200).send(user))
  .catch(next);

// update profile data
const patchProfile = (req, res, next) => {
  const { name, about } = req.body;

  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((user) => res.status(200).send(user))
    .catch(next);
};

// update profile avatar
const patchAvatar = (req, res, next) => {
  const { avatar } = req.body;

  return User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .then((user) => res.status(200).send(user))
    .catch(next);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  login,
  patchProfile,
  patchAvatar,
};
