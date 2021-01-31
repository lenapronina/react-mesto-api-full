const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers,
  getUser,
  getUserById,
  patchProfile,
  patchAvatar,
} = require('../controllers/users.js');

router.get('/', celebrate({
  headers: Joi.object().keys({}).unknown(true),
}), getUsers);

router.get('/me', celebrate({
  headers: Joi.object().keys({}).unknown(true),
}), getUser);

router.get('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
  headers: Joi.object().keys({}).unknown(true),
}), getUserById);

router.patch('/me', celebrate({
  headers: Joi.object().keys({}).unknown(true),
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), patchProfile);

router.patch('/me/avatar', celebrate({
  headers: Joi.object().keys({}).unknown(true),
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(/https?:\/\/(w*\.)?[\d\w\-.[+()~:/\\?#\]@!$&'*,;=]{2,}#?/),
  }),
}), patchAvatar);

module.exports = router;
