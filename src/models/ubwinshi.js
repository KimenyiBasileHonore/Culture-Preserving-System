const mongoose = require('mongoose');

const ubwinshiSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

module.exports = mongoose.model('Ubwinshi', ubwinshiSchema);
