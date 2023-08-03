// models/indirimboModel.js
const mongoose = require('mongoose');

const indirimboSchema = new mongoose.Schema({
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

const Indirimbo = mongoose.model('Indirimbo', indirimboSchema);

module.exports = Indirimbo;
