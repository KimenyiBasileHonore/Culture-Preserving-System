// models/ibisakuzo.js
const mongoose = require('mongoose');

const ibisakuzoSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answers: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

module.exports = mongoose.model('Ibisakuzo', ibisakuzoSchema);
