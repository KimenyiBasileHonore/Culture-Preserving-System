// controllers/imivugoController.js

const Imivugo = require('../models/imivugo');

// Controller to fetch all Imivugo data
const getAllImivugo = async (req, res) => {
  try {
    const imivugo = await Imivugo.find();
    res.json(imivugo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to create new Imivugo data
const createImivugo = async (req, res) => {
  try {
    const newImivugo = new Imivugo(req.body);
    const savedImivugo = await newImivugo.save();
    res.json(savedImivugo);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

// Controller to fetch a specific Imivugo by ID
const getImivugoById = async (req, res) => {
  try {
    const imivugo = await Imivugo.findById(req.params.id);
    if (!imivugo) {
      return res.status(404).json({ message: 'Imivugo not found' });
    }
    res.json(imivugo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to update an existing Imivugo
const updateImivugo = async (req, res) => {
  try {
    const updatedImivugo = await Imivugo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedImivugo) {
      return res.status(404).json({ message: 'Imivugo not found' });
    }
    res.json(updatedImivugo);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

// Controller to delete an Imivugo by ID
const deleteImivugo = async (req, res) => {
  try {
    const deletedImivugo = await Imivugo.findByIdAndDelete(req.params.id);
    if (!deletedImivugo) {
      return res.status(404).json({ message: 'Imivugo not found' });
    }
    res.json(deletedImivugo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
const countTitles = async (req, res) => {
  try {
    const titleCount = await Imivugo.countDocuments();
    res.status(200).json({ count: titleCount });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  getAllImivugo,
  createImivugo,
  getImivugoById,
  updateImivugo,
  deleteImivugo,
  countTitles,
  
};
