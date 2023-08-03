const Ikenshavugo = require("../models/ikenshavugo");

exports.getAllIkenshavugo = async (req, res) => {
  try {
    const ikenshavugoList = await Ikenshavugo.find();
    res.status(200).json(ikenshavugoList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getIkenshavugoById = async (req, res) => {
  try {
    const ikenshavugo = await Ikenshavugo.findById(req.params.id);
    if (!ikenshavugo) {
      return res.status(404).json({ msg: 'Ikenshavugo not found' });
    }
    res.status(200).json(ikenshavugo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createIkenshavugo = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newIkenshavugo = new Ikenshavugo({ title, content, author });
    const savedIkenshavugo = await newIkenshavugo.save();
    res.status(200).json(savedIkenshavugo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateIkenshavugo = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const updatedIkenshavugo = await Ikenshavugo.findByIdAndUpdate(
      req.params.id,
      { title, content, author },
      { new: true }
    );
    res.status(200).json(updatedIkenshavugo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteIkenshavugo = async (req, res) => {
  try {
    const deletedIkenshavugo = await Ikenshavugo.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedIkenshavugo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
