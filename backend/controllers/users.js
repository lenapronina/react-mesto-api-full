const manageErrorStatus = require('../helpers/manageErrorStatus');
const User = require('../models/user');

// get all users
const getUsers = (req, res) => User.find({})
  .then((users) => res.status(200).send(users))
  .catch((err) => manageErrorStatus(res, err));

// get one user selected by id
const getUser = (req, res) => User.findById(req.params._id)
  .orFail(new Error('FindIdError'))
  .then((user) => res.status(200).send(user))
  .catch((err) => manageErrorStatus(res, err, 'пользователя'));

// create new user
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  return User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => manageErrorStatus(res, err));
};

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
  patchProfile,
  patchAvatar,
};
