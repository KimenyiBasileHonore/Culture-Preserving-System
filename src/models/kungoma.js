const mongoose = require("mongoose");

const kungomaSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Kungoma = mongoose.model("Kungoma", kungomaSchema);

module.exports = Kungoma;
