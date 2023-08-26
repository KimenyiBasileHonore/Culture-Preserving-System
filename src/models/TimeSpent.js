// models/TimeSpent.js
const mongoose = require('mongoose');

const timeSpentSchema = new mongoose.Schema({
  contentId: String,
  timeSpent: Number,
});

const TimeSpent = mongoose.model('TimeSpent', timeSpentSchema);

module.exports = TimeSpent;
