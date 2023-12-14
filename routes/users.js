const express = require('express');

const { getAllUsers, getUserById } = require('../controllers/usersController');

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);

module.exports = router;
