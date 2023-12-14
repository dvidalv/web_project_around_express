const express = require('express');
const morgan = require('morgan');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

// MIDDLEWARE - Not found handler
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found',
  });
  next();
});

// MIDDLEWARE - server error
app.use((err, req, res) => {
  // eslint-disable-next-line no-console
  console.error(err.stack); // Log error stack to console
  res.status(500).send('An error has occurred on the server');
});

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
