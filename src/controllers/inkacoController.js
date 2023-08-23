// controllers/inkacoController.js
const Inka = require('../models/inka');

// Get all Inka items
exports.getAllInka = async (req, res) => {
  try {
    const inka = await Inka.find();
    res.status(200).json(inka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific Inka item by ID
exports.getInkaById = async (req, res) => {
  try {
    const inka = await Inka.findById(req.params.id);
    if (!inka) {
      return res.status(404).json({ message: 'Inka not found' });
    }
    res.status(200).json(inka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new Inka item
exports.createInka = async (req, res) => {
  try {
    const inka = await Inka.create(req.body);
    res.status(201).json(inka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing Inka item
exports.updateInka = async (req, res) => {
  try {
    const inka = await Inka.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!inka) {
      return res.status(404).json({ message: 'Inka not found' });
    }
    res.status(200).json(inka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an existing Inka item
exports.deleteInka = async (req, res) => {
  try {
    const inka = await Inka.findByIdAndDelete(req.params.id);
    if (!inka) {
      return res.status(404).json({ message: 'Inka not found' });
    }
    res.status(200).json({ message: 'Inka deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.countTitles = async (req, res) => {
  try {
    const titleCount = await  Inka.countDocuments();
    res.status(200).json({ count: titleCount });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
