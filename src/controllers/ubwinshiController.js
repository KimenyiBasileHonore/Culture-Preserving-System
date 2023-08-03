const Ubwinshi = require('../models/ubwinshi');

// Get all "Ubwinshi bw’abantu n’ibintu"
const getAllUbwinshi = async (req, res) => {
  try {
    const ubwinshi = await Ubwinshi.find();
    res.status(200).json(ubwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getUbwinshiById = async (req, res) => {
  try {
    const { id } = req.params;
    const ubwinshi = await Ubwinshi.findById(id);
    if (!ubwinshi) {
      return res.status(404).json({ msg: 'Ubwinshi not found' });
    }
    res.status(200).json(ubwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
// Add a new "Ubwinshi bw’abantu n’ibintu"
const addUbwinshi = async (req, res) => {
  const { title, frontContent, backContent } = req.body;
  try {
    const newUbwinshi = new Ubwinshi({ title, frontContent, backContent });
    await newUbwinshi.save();
    res.status(200).json(newUbwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update "Ubwinshi bw’abantu n’ibintu"
const updateUbwinshi = async (req, res) => {
  const { title, frontContent, backContent } = req.body;
  try {
    const updatedUbwinshi = await Ubwinshi.findByIdAndUpdate(
      req.params.id,
      { title, frontContent, backContent },
      { new: true }
    );
    res.status(200).json(updatedUbwinshi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete "Ubwinshi bw’abantu n’ibintu"
const deleteUbwinshi = async (req, res) => {
  try {
    await Ubwinshi.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: 'Ubwinshi deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');

  }
};

module.exports = {
  getAllUbwinshi,
  getUbwinshiById,
  addUbwinshi,
  updateUbwinshi,
  deleteUbwinshi,
  
};
