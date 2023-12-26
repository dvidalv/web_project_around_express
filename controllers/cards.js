const httpStatus = require('http-status');
const Card = require('../models/card');

// GET /cards — devuelve todas las tarjetas
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(httpStatus.OK).send(cards);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};

// POST /cards — crea una tarjeta
const createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const card = await Card.create({ name, link, owner: req.user._id });
    res.status(200).send(card);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// GET /cards/:cardId — devuelve una tarjeta por su id
const getCardById = async (req, res) => {
  let card;
  try {
    const { cardId } = req.params;
    card = await Card.findById(cardId);
    if (!card) {
      return res.status(404).send({ message: 'No card found with this id' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  } finally {
    if (card) {
      res.status(200).send(card);
    }
  }
  return null;
};

// DELETE /cards/:cardId
const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    if (!cardId) {
      return res.status(400).send({ message: 'cardId is required' });
    }
    const card = await Card.findByIdAndDelete(cardId);
    if (!card) {
      return res.status(404).send({ message: 'No card found with this id' });
    }
    return res.status(200).send(card);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

// PUT /cards/:cardId/likes — dar like a una tarjeta
const likeCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );
    if (!card) {
      return res.status(404).send({ message: 'No card found with this id' });
    }
    return res.status(200).send(card);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

// DELETE /cards/:cardId/likes — quitar like a una tarjeta
const dislikeCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findByIdAndUpdate(
      cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    );
    if (!card) {
      return res.status(404).send({ message: 'No card found with this id' });
    }
    return res.status(200).send(card);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
  getCardById,
  likeCard,
  dislikeCard,
};
