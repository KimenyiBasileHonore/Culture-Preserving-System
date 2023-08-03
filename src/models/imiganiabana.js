// models/imiganiabana.js
const mongoose = require('mongoose');

const imiganiabanaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const Imiganiabana = mongoose.model('Imiganiabana', imiganiabanaSchema);

module.exports = Imiganiabana;
