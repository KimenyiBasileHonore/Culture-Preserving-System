const mongoose = require("mongoose");

const ikenshavugoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const Ikenshavugo = mongoose.model("Ikenshavugo", ikenshavugoSchema);

module.exports = Ikenshavugo;
