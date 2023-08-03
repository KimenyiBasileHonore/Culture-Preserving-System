const mongoose = require('mongoose');

const imiganimiremireSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Imiganimiremire = mongoose.model('Imiganimiremire', imiganimiremireSchema);

module.exports = Imiganimiremire;
