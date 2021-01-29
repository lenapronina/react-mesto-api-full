const mongoose = require('mongoose');
const linkValidator = require('../helpers/linkValidator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => linkValidator(v),
      message: 'Неправильный url для изображения',
    },
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
