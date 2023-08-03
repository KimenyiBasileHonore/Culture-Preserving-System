const Icyansi = require('../models/icyansi');

// Get all Icyansi items
exports.getAllIcyansi = async (req, res) => {
  try {
    const icyansi = await Icyansi.find();
    res.status(200).json(icyansi);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific Icyansi item by ID
exports.getIcyansiById = async (req, res) => {
  try {
    const icyansi = await Icyansi.findById(req.params.id);
    if (!icyansi) {
      return res.status(404).json({ message: 'Icyansi not found' });
    }
    res.status(200).json(icyansi);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new Icyansi item
exports.createIcyansi = async (req, res) => {
  try {
    const icyansi = await Icyansi.create(req.body);
    res.status(201).json(icyansi);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing Icyansi item
exports.updateIcyansi = async (req, res) => {
  try {
    const icyansi = await Icyansi.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!icyansi) {
      return res.status(404).json({ message: 'Icyansi not found' });
    }
    res.status(200).json(icyansi);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an existing Icyansi item
exports.deleteIcyansi = async (req, res) => {
  try {
    const icyansi = await Icyansi.findByIdAndDelete(req.params.id);
    if (!icyansi) {
      return res.status(404).json({ message: 'Icyansi not found' });
    }
    res.status(200).json({ message: 'Icyansi deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
