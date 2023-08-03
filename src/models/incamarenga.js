const mongoose = require("mongoose");

const incamarengaSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Incamarenga = mongoose.model("Incamarenga", incamarengaSchema);

module.exports = Incamarenga;
