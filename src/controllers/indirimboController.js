// controllers/indirimboController.js
const Indirimbo = require('../models/indirimboModel');

// Get all Indirimbo items
exports.getAllIndirimbo = async (req, res) => {
  try {
    const indirimbo = await Indirimbo.find();
    res.status(200).json(indirimbo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific Indirimbo item by ID
exports.getIndirimboById = async (req, res) => {
  try {
    const indirimbo = await Indirimbo.findById(req.params.id);
    if (!indirimbo) {
      return res.status(404).json({ message: 'Indirimbo not found' });
    }
    res.status(200).json(indirimbo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new Indirimbo item
exports.createIndirimbo = async (req, res) => {
  try {
    const indirimbo = await Indirimbo.create(req.body);
    res.status(201).json(indirimbo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing Indirimbo item
exports.updateIndirimbo = async (req, res) => {
  try {
    const indirimbo = await Indirimbo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!indirimbo) {
      return res.status(404).json({ message: 'Indirimbo not found' });
    }
    res.status(200).json(indirimbo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an existing Indirimbo item
exports.deleteIndirimbo = async (req, res) => {
  try {
    const indirimbo = await Indirimbo.findByIdAndDelete(req.params.id);
    if (!indirimbo) {
      return res.status(404).json({ message: 'Indirimbo not found' });
    }
    res.status(200).json({ message: 'Indirimbo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.countTitles = async (req, res) => {
  try {
    const titleCount = await Indirimbo.countDocuments();
    res.status(200).json({ count: titleCount });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};