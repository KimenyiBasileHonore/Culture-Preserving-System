const mongoose = require('mongoose');

const icyansiSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Icyansi = mongoose.model('Icyansi', icyansiSchema);

module.exports = Icyansi;
