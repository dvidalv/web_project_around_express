const fs = require('fs');
const path = require('path');

async function readCards() {
  try {
    const cards = await fs.promises.readFile(
      path.join(__dirname, '../data', 'cards.json'),
      'utf-8',
    );
    return JSON.parse(cards);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error reading or parsing cards.json:', err);
    throw err;
  }
}

const getAllCards = async (req, res) => {
  try {
    const cards = await readCards();
    res.status(200).json({
      status: 'success',
      message: 'Welcome to the API',
      cards,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Could not read cards data',
    });
  }
};

module.exports = {
  getAllCards,
};
