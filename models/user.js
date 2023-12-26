// esquemas de usuarios
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String, // Tipo de dato
    required: true, // Requerido
    minlength: 2, // Mínimo de caracteres
    maxlength: 30, // Máximo de caracteres
  },
  about: {
    type: String, // Tipo de dato
    required: true, // Requerido
    minlength: 2, // Mínimo de caracteres
    maxlength: 30, // Máximo de caracteres
  },
  avatar: {
    type: String, // Tipo de dato
    required: true, // Requerido
    validate: {
      validator(v) {
        const urlRegex =
          // eslint-disable-next-line no-useless-escape
          /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return urlRegex.test(v);
      },
      message: 'Debe ser una URL válida',
    },
  },
});

// exportar el modelo
module.exports = mongoose.model('user', userSchema);
