const mongoose = require('mongoose');

// Definicja schematu notatki
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// Utworzenie modelu notatki na podstawie schematu
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
