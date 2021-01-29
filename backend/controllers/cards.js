const manageErrorStatus = require('../helpers/manageErrorStatus');
const Card = require('../models/card');

// get all cards
const getCards = (req, res) => Card.find({})
  .then((cards) => res.status(200).send(cards))
  .catch((err) => manageErrorStatus(res, err, 'карточки'));

// add new card
const createCard = (req, res) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  return Card.create({ name, link, owner })
    .then((card) => res.status(200).send(card))
    .catch((err) => manageErrorStatus(res, err));
};

// delete card selected by id
const deleteCard = (req, res) => Card.findByIdAndRemove(req.params._id)
  .orFail(new Error('FindIdError'))
  .then(() => res.status(200).send({ message: 'Карточка удалена' }))
  .catch((err) => manageErrorStatus(res, err, 'карточки'));

// add like to card
const likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params._id,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .orFail(new Error('FindIdError'))
  .then((card) => res.status(200).send(card))
  .catch((err) => manageErrorStatus(res, err, 'карточки'));

// remove like from card
const dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params._id,
  { $pull: { likes: req.user._id } },
  { new: true },
)
  .orFail(new Error('FindIdError'))
  .then((card) => res.status(200).send(card))
  .catch((err) => manageErrorStatus(res, err, 'карточки'));

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
