const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const Card = require('../models/card');

// get all cards
const getCards = (req, res, next) => Card.find({})
  .then((cards) => res.status(200).send(cards))
  .catch(next);

// add new card
const createCard = (req, res, next) => {
  const owner = req.user._id;
  const { name, link } = req.body;

  return Card.create({ name, link, owner })
    .then((card) => res.status(200).send(card))
    .catch(next);
};

// delete card selected by id
const deleteCard = (req, res, next) => {
  const owner = req.user._id;
  return Card.findById(req.params._id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Нет карточки с таким id');
      }
      if (JSON.stringify(owner) !== JSON.stringify(card.owner)) {
        throw new ForbiddenError('Нет прав для удаления карточки');
      }
      return Card.remove({ _id: card._id })
        .then(() => res.status(200).send({ message: 'Карточка удалена' }))
        .catch(next);
    })
    .catch(next);
};

// add like to card
const likeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params._id,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .then((card) => {
    if (!card) {
      throw new NotFoundError('Нет карточки с таким id');
    }
    res.status(200).send(card);
  })
  .catch(next);

// remove like from card
const dislikeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params._id,
  { $pull: { likes: req.user._id } },
  { new: true },
)
  .then((card) => {
    if (!card) {
      throw new NotFoundError('Нет карточки с таким id');
    }
    res.status(200).send(card);
  })
  .catch(next);

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
