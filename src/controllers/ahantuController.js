const Ahantu = require('../models/ahantu');

// Get all Ahantu items
exports.getAllAhantu = async (req, res) => {
  try {
    const ahantu = await Ahantu.find();
    res.status(200).json(ahantu);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific Ahantu item by ID
exports.getAhantuById = async (req, res) => {
  try {
    const ahantu = await Ahantu.findById(req.params.id);
    if (!ahantu) {
      return res.status(404).json({ message: 'Ahantu not found' });
    }
    res.status(200).json(ahantu);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new Ahantu item
exports.createAhantu = async (req, res) => {
  try {
    const ahantu = await Ahantu.create(req.body);
    res.status(201).json(ahantu);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing Ahantu item
exports.updateAhantu = async (req, res) => {
  try {
    const ahantu = await Ahantu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!ahantu) {
      return res.status(404).json({ message: 'Ahantu not found' });
    }
    res.status(200).json(ahantu);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an existing Ahantu item
exports.deleteAhantu = async (req, res) => {
  try {
    const ahantu = await Ahantu.findByIdAndDelete(req.params.id);
    if (!ahantu) {
      return res.status(404).json({ message: 'Ahantu not found' });
    }
    res.status(200).json({ message: 'Ahantu deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
