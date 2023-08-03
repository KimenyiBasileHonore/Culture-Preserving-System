// models/inka.js
const mongoose = require('mongoose');

const inkaSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Inka = mongoose.model('Inka', inkaSchema);

module.exports = Inka;
