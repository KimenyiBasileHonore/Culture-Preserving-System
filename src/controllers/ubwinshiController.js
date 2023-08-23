const Ubwinshi = require('../models/ubwinshi');

// Get all "Ubwinshi bw’abantu n’ibintu"
exports.getAllUbwinshi = async (req, res) => {
  try {
    const ubwinshi = await Ubwinshi.find();
    res.status(200).json(ubwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get a specific "Ubwinshi bw’abantu n’ibintu" by ID
exports.getUbwinshiById = async (req, res) => {
  try {
    const ubwinshi = await Ubwinshi.findById(req.params.id);
    if (!ubwinshi) {
      return res.status(404).json({ error: 'Ubwinshi not found' });
    }
    res.status(200).json(ubwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Add a new "Ubwinshi bw’abantu n’ibintu"
exports.addUbwinshi = async (req, res) => {
  const { title, frontContent, backContent } = req.body;
  try {
    const newUbwinshi = new Ubwinshi({ title, frontContent, backContent });
    await newUbwinshi.save();
    res.status(201).json(newUbwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update "Ubwinshi bw’abantu n’ibintu"
exports.updateUbwinshi = async (req, res) => {
  const { title, frontContent, backContent } = req.body;
  try {
    const updatedUbwinshi = await Ubwinshi.findByIdAndUpdate(
      req.params.id,
      { title, frontContent, backContent },
      { new: true }
    );
    if (!updatedUbwinshi) {
      return res.status(404).json({ error: 'Ubwinshi not found' });
    }
    res.status(200).json(updatedUbwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete "Ubwinshi bw’abantu n’ibintu"
exports.deleteUbwinshi = async (req, res) => {
  try {
    const deletedUbwinshi = await Ubwinshi.findByIdAndRemove(req.params.id);
    if (!deletedUbwinshi) {
      return res.status(404).json({ error: 'Ubwinshi not found' });
    }
    res.status(200).json({ message: 'Ubwinshi deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.countTitles = async (req, res) => {
  try {
    const titleCount = await Ubwinshi.countDocuments();
    res.status(200).json({ count: titleCount });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
