const mongoose = require('mongoose');

const ahantuSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Ahantu = mongoose.model('Ahantu', ahantuSchema);

module.exports = Ahantu;
