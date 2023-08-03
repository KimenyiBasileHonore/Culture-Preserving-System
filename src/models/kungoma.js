const mongoose = require("mongoose");

const kungomaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const Kungoma = mongoose.model("Kungoma", kungomaSchema);

module.exports = Kungoma;
