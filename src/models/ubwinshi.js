const mongoose = require('mongoose');

const ubwinshiSchema = new mongoose.Schema({
  title: { type: String, required: true },
  frontContent: { type: String, required: true },
  backContent: { type: String, required: true },
});

module.exports = mongoose.model('Ubwinshi', ubwinshiSchema);
