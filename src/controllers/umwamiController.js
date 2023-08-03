const Umwami = require('../models/umwami');

// Get all Umwami items
exports.getAllUmwami = async (req, res) => {
  try {
    const umwami = await Umwami.find();
    res.status(200).json(umwami);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific Umwami item by ID
exports.getUmwamiById = async (req, res) => {
  try {
    const umwami = await Umwami.findById(req.params.id);
    if (!umwami) {
      return res.status(404).json({ message: 'Umwami not found' });
    }
    res.status(200).json(umwami);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new Umwami item
exports.createUmwami = async (req, res) => {
  try {
    const umwami = await Umwami.create(req.body);
    res.status(201).json(umwami);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing Umwami item
exports.updateUmwami = async (req, res) => {
  try {
    const umwami = await Umwami.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!umwami) {
      return res.status(404).json({ message: 'Umwami not found' });
    }
    res.status(200).json(umwami);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an existing Umwami item
exports.deleteUmwami = async (req, res) => {
  try {
    const umwami = await Umwami.findByIdAndDelete(req.params.id);
    if (!umwami) {
      return res.status(404).json({ message: 'Umwami not found' });
    }
    res.status(200).json({ message: 'Umwami deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
