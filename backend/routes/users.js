const router = require('express').Router();
const {
  getUsers,
  getUser,
  patchProfile,
  patchAvatar,
} = require('../controllers/users.js');

router.get('/', getUsers);

router.get('/me', getUser);

router.patch('/me', patchProfile);

router.patch('/me/avatar', patchAvatar);

module.exports = router;
