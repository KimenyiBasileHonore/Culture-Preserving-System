// controllers/analyticsController.js
const Analytics = require('../models/analytics');

exports.trackPageVisit = async (req, res) => {
  try {
    // Extract relevant information from the request
    const { ip, timestamp, page } = req.body;

    // Create a new analytics record
    await Analytics.create({ ip, timestamp, page });

    res.status(200).json({ message: 'Page visit tracked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
