const fs = require('fs');
const path = require('path');

// ROTTES HANDLERS
async function readUsers() {
  try {
    const users = await fs.promises.readFile(
      path.join(__dirname, '../data', 'users.json'),
      'utf-8',
    );
    return JSON.parse(users);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error reading or parsing users.json:', err);
    throw err;
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await readUsers();
    res.status(200).json({
      status: 'success',
      message: 'Welcome to the API',
      users,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Could not read users data',
    });
  }
};

const getUserById = async (req, res) => {
  const users = await readUsers();
  const { id } = req.params;
  const user = users.find((u) => u._id === id);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found',
    });
  }
  return res.status(200).json({
    status: 'success',
    message: 'User found',
    user,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
};
