const mongoose = require('mongoose');

const umwamiSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Umwami = mongoose.model('Umwami', umwamiSchema);

module.exports = Umwami;
