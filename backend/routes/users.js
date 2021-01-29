const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  patchProfile,
  patchAvatar,
} = require('../controllers/users.js');

router.get('/', getUsers);

router.get('/:_id', getUser);

router.post('/', createUser);

router.patch('/me', patchProfile);

router.patch('/me/avatar', patchAvatar);

module.exports = router;
