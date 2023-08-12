const mongoose = require('mongoose');

const kunkaSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Kunka = mongoose.model('Kunka', kunkaSchema);

module.exports = Kunka;
