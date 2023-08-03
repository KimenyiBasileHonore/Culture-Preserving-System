const Imiganimiremire = require('../models/imiganimiremire');

// Controller to get all imiganimiremire
exports.getAllImiganimiremire = async (req, res) => {
  try {
    const imiganimiremire = await Imiganimiremire.find({});
    res.json(imiganimiremire);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getImiganimiremireById = async (req, res) => {
  try {
    const { id } = req.params;
    const imiganimiremire = await Imiganimiremire.findById(id);
    if (!imiganimiremire) {
      return res.status(404).json({ error: 'Imiganimiremire not found' });
    }
    res.json(imiganimiremire);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller to create a new imiganimiremire
exports.createImiganimiremire = async (req, res) => {
  try {
    const { title, summary, details } = req.body;
    const newImiganimiremire = await Imiganimiremire.create({ title, summary, details });
    res.json(newImiganimiremire);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller to update a imiganimiremire
exports.updateImiganimiremire = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, summary, details } = req.body;

    const updatedImiganimiremire = await Imiganimiremire.findByIdAndUpdate(
      id,
      { title, summary, details },
      { new: true }
    );
    res.json(updatedImiganimiremire);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller to delete a imiganimiremire
exports.deleteImiganimiremire = async (req, res) => {
  try {
    const { id } = req.params;
    await Imiganimiremire.findByIdAndDelete(id);
    res.json({ message: 'Imiganimiremire deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
