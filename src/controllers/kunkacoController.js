const Kunka = require('../models/kunka');

// Get all Kunka items
exports.getAllKunka = async (req, res) => {
  try {
    const kunka = await Kunka.find();
    res.status(200).json(kunka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific Kunka item by ID
exports.getKunkaById = async (req, res) => {
  try {
    const kunka = await Kunka.findById(req.params.id);
    if (!kunka) {
      return res.status(404).json({ message: 'Kunka not found' });
    }
    res.status(200).json(kunka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new Kunka item
exports.createKunka = async (req, res) => {
  try {
    const kunka = await Kunka.create(req.body);
    res.status(201).json(kunka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing Kunka item
exports.updateKunka = async (req, res) => {
  try {
    const kunka = await Kunka.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!kunka) {
      return res.status(404).json({ message: 'Kunka not found' });
    }
    res.status(200).json(kunka);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an existing Kunka item
exports.deleteKunka = async (req, res) => {
  try {
    const kunka = await Kunka.findByIdAndDelete(req.params.id);
    if (!kunka) {
      return res.status(404).json({ message: 'Kunka not found' });
    }
    res.status(200).json({ message: 'Kunka deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.countTitles = async (req, res) => {
  try {
    const titleCount = await Kunka.countDocuments();
    res.status(200).json({ count: titleCount });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
