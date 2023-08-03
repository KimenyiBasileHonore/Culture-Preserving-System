const mongoose = require("mongoose");

const ibyivugoSchema = new mongoose.Schema({
  title: String,
  summary: String,
  details: String,
});

const Ibyivugo = mongoose.model("Ibyivugo", ibyivugoSchema);

module.exports = Ibyivugo;
