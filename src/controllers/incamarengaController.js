const Incamarenga = require("../models/incamarenga");

// Get all incamarengas
exports.getAllIncamarengas = async (req, res) => {
  try {
    const incamarengas = await Incamarenga.find();
    res.status(200).json(incamarengas);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch incamarengas." });
  }
};

// Get a single incamarenga by ID
exports.getIncamarengaById = async (req, res) => {
  try {
    const incamarenga = await Incamarenga.findById(req.params.id);
    if (!incamarenga) {
      return res.status(404).json({ error: "Incamarenga not found." });
    }
    res.status(200).json(incamarenga);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch incamarenga." });
  }
};

// Create a new incamarenga
exports.createIncamarenga = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newIncamarenga = await Incamarenga.create({ title, content });
    res.status(201).json(newIncamarenga);
  } catch (err) {
    res.status(500).json({ error: "Failed to create incamarenga." });
  }
};


// Update an existing incamarenga by ID
exports.updateIncamarenga = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedIncamarenga = await Incamarenga.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedIncamarenga) {
      return res.status(404).json({ error: "Incamarenga not found." });
    }
    res.status(200).json(updatedIncamarenga);
  } catch (err) {
    res.status(500).json({ error: "Failed to update incamarenga." });
  }
};

// Delete an incamarenga by ID
exports.deleteIncamarenga = async (req, res) => {
  try {
    const deletedIncamarenga = await Incamarenga.findByIdAndDelete(req.params.id);
    if (!deletedIncamarenga) {
      return res.status(404).json({ error: "Incamarenga not found." });
    }
    res.status(200).json(deletedIncamarenga);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete incamarenga." });
  }
};

exports.getIncamarengaCount = async (req, res) => {
  try {
    const count = await Incamarenga.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch incamarenga count." });
  }
};
