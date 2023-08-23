// models/analytics.js
const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
  timeSpent: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
