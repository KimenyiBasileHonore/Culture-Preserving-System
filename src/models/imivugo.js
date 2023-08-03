// model/imivugo.js

const mongoose = require('mongoose');

// Define the schema for Imivugo data
const imivugoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

// Create the Imivugo model using the schema
const Imivugo = mongoose.model('Imivugo', imivugoSchema);

module.exports = Imivugo;
