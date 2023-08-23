const Ibyivugo = require("../models/ibyivugo");

// Get all Ibyivugo
exports.getAllIbyivugo = async (req, res) => {
  try {
    const ibyivugoData = await Ibyivugo.find();
    res.json(ibyivugoData);
  } catch (error) {
    console.error("Error fetching Ibyivugo data:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get a specific Ibyivugo by ID
exports.getIbyivugoById = async (req, res) => {
  try {
    const ibyivugo = await Ibyivugo.findById(req.params.id);
    if (!ibyivugo) {
      return res.status(404).json({ message: "Ibyivugo not found" });
    }
    res.json(ibyivugo);
  } catch (error) {
    console.error("Error fetching Ibyivugo:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Create a new Ibyivugo
exports.createIbyivugo = async (req, res) => {
  try {
    const { title, summary, details } = req.body;
    const newIbyivugo = new Ibyivugo({ title, summary, details });
    await newIbyivugo.save();
    res.json(newIbyivugo);
  } catch (error) {
    console.error("Error creating Ibyivugo:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update an existing Ibyivugo
exports.updateIbyivugo = async (req, res) => {
  try {
    const { title, summary, details } = req.body;
    const ibyivugo = await Ibyivugo.findById(req.params.id);
    if (!ibyivugo) {
      return res.status(404).json({ message: "Ibyivugo not found" });
    }
    ibyivugo.title = title;
    ibyivugo.summary = summary;
    ibyivugo.details = details;
    await ibyivugo.save();
    res.json(ibyivugo);
  } catch (error) {
    console.error("Error updating Ibyivugo:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete an existing Ibyivugo
exports.deleteIbyivugo = async (req, res) => {
  try {
    const ibyivugo = await Ibyivugo.findByIdAndDelete(req.params.id);
    if (!ibyivugo) {
      return res.status(404).json({ message: "Ibyivugo not found" });
    }
    res.json({ message: "Ibyivugo deleted successfully" });
  } catch (error) {
    console.error("Error deleting Ibyivugo:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.countTitles = async (req, res) => {
  try {
    const titleCount = await Ibyivugo.countDocuments();
    res.status(200).json({ count: titleCount });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
