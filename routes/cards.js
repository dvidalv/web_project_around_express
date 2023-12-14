const express = require('express');
const { getAllCards } = require('../controllers/cardsControllers');

const router = express.Router();

router.get('/', getAllCards);

module.exports = router;
