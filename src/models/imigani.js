// models/imigani.js
const mongoose = require('mongoose');

const imiganiSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Imigani', imiganiSchema);
