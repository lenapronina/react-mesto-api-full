const cardRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards.js');

cardRouter.get('/', celebrate({
  headers: Joi.object().keys({}).unknown(true),
}), getCards);

cardRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(/https?:\/\/(w*\.)?[\d\w\-.[+()~:/\\?#\]@!$&'*,;=]{2,}#?/),
  }),
  headers: Joi.object().keys({}).unknown(true),
}), createCard);

cardRouter.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
  headers: Joi.object().keys({}).unknown(true),
}), deleteCard);

cardRouter.put('/:_id/likes', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
  headers: Joi.object().keys({}).unknown(true),
}), likeCard);

cardRouter.delete('/:_id/likes', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
  headers: Joi.object().keys({}).unknown(true),
}), dislikeCard);

module.exports = cardRouter;
