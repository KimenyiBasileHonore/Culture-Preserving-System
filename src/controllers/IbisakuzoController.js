const Ibisakuzo = require('../models/Ibisakuzo');

// Get all ibisakuzo (quiz questions)
const getAllIbisakuzo = async (req, res) => {
  try {
    const ibisakuzo = await Ibisakuzo.find();
    res.json(ibisakuzo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a new ibisakuzo (question)
const addIbisakuzo = async (req, res) => {
  const { question, answers } = req.body;
  try {
    const newIbisakuzo = new Ibisakuzo({ question, answers });
    await newIbisakuzo.save();
    res.json(newIbisakuzo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getIbisakuzoById = async (req, res) => {
  try {
    const ibisakuzo = await Ibisakuzo.findById(req.params.id);
    if (!ibisakuzo) {
      return res.status(404).json({ msg: 'Ibisakuzo not found' });
    }
    res.json(ibisakuzo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update an ibisakuzo (question)
const updateIbisakuzo = async (req, res) => {
  const { question, answers } = req.body;
  try {
    const updatedIbisakuzo = await Ibisakuzo.findByIdAndUpdate(
      req.params.id,
      { question, answers },
      { new: true }
    );
    res.json(updatedIbisakuzo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete an ibisakuzo (question)
const deleteIbisakuzo = async (req, res) => {
  try {
    await Ibisakuzo.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Ibisakuzo deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getAllIbisakuzo,
  addIbisakuzo,
  updateIbisakuzo,
  deleteIbisakuzo,
  getIbisakuzoById,
};
