// controllers/imiganiController.js
const Imigani = require('../models/imigani');

exports.getAllImigani = async (req, res) => {
  try {
    const imiganiList = await Imigani.find();
    res.status(200).json(imiganiList);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createImigani = async (req, res) => {
  try {
    const newImigani = await Imigani.create({ content: req.body.content });
    res.status(201).json(newImigani);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.countImigani = async (req, res) => {
  try {
    const imiganiCount = await Imigani.countDocuments();
    res.status(200).json({ count: imiganiCount });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteImigani = async (req, res) => {
  try {
    const deletedImigani = await Imigani.findByIdAndDelete(req.params.id);
    if (!deletedImigani) {
      return res.status(404).json({ message: 'Imigani not found' });
    }
    res.status(200).json({ message: 'Imigani deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getImiganiById = async (req, res) => {
    try {
      const imigani = await Imigani.findById(req.params.id);
      if (!imigani) {
        return res.status(404).json({ message: 'Imigani not found' });
      }
      res.status(200).json(imigani);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  exports.updateImigani = async (req, res) => {
    try {
      const updatedImigani = await Imigani.findByIdAndUpdate(
        req.params.id,
        { content: req.body.content },
        { new: true, runValidators: true }
      );
      if (!updatedImigani) {
        return res.status(404).json({ message: 'Imigani not found' });
      }
      res.status(200).json(updatedImigani);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  