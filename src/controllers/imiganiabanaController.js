// controllers/imiganiabanaController.js
const Imiganiabana = require('../models/imiganiabana');

// Get all Imiganiabana
exports.getAllImiganiabana = async (req, res) => {
  try {
    const imiganiabana = await Imiganiabana.find();
    res.json(imiganiabana);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single Imiganiabana by ID
exports.getImiganiabanaById = async (req, res) => {
  try {
    const imiganiabana = await Imiganiabana.findById(req.params.id);
    if (!imiganiabana) {
      return res.status(404).json({ message: 'Imiganiabana not found' });
    }
    res.json(imiganiabana);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new Imiganiabana
exports.createImiganiabana = async (req, res) => {
  try {
    const { title, summary, details } = req.body;
    const newImiganiabana = new Imiganiabana({ title, summary, details });
    const savedImiganiabana = await newImiganiabana.save();
    res.status(201).json(savedImiganiabana);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing Imiganiabana
exports.updateImiganiabana = async (req, res) => {
  try {
    const { title, summary, details } = req.body;
    const updatedImiganiabana = await Imiganiabana.findByIdAndUpdate(
      req.params.id,
      { title, summary, details },
      { new: true }
    );
    if (!updatedImiganiabana) {
      return res.status(404).json({ message: 'Imiganiabana not found' });
    }
    res.json(updatedImiganiabana);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an Imiganiabana
exports.deleteImiganiabana = async (req, res) => {
  try {
    const deletedImiganiabana = await Imiganiabana.findByIdAndRemove(req.params.id);
    if (!deletedImiganiabana) {
      return res.status(404).json({ message: 'Imiganiabana not found' });
    }
    res.json(deletedImiganiabana);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
