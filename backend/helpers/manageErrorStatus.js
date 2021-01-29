const manageErrorStatus = (res, err, name = 'объекта') => {
  if (err.name === 'CastError' || err.message === 'FindIdError') {
    res.status(404).send({ message: `Нет ${name} с таким id` });
  } else if (err.name === 'ValidationError') {
    res.status(400).send({ message: 'Неправильно введены данные' });
  } else {
    res.status(500).send({ message: 'На сервере произошла ошибка' });
  }
};

module.exports = manageErrorStatus;
