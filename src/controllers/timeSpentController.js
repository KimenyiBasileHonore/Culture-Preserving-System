// controllers/timeSpentController.js
const TimeSpent = require('../models/TimeSpent');

const trackTotalTimeSpent = async (req, res) => {
  const { totalTimeSpent } = req.body;

  try {
    await TimeSpent.create({ totalTimeSpent });
    res.status(200).send('Total time spent tracked successfully.');
  } catch (error) {
    console.error('Error tracking total time:', error);
    res.status(500).send('Internal server error.');
  }
};

module.exports = { trackTotalTimeSpent };
