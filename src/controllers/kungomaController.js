const Kungoma = require("../models/kungoma");

exports.getAllKungoma = async (req, res) => {
  try {
    const kungomaList = await Kungoma.find();
    res.status(200).json(kungomaList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getKungomaById = async (req, res) => {
  try {
    const { id } = req.params;
    const kungoma = await Kungoma.findById(id);
    if (!kungoma) {
      return res.status(404).json({ error: 'Kungoma not found' });
    }
    res.status(200).json(kungoma);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.createKungoma = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newKungoma = new Kungoma({ title, content, author });
    const savedKungoma = await newKungoma.save();
    res.status(200).json(savedKungoma);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateKungoma = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const updatedKungoma = await Kungoma.findByIdAndUpdate(
      req.params.id,
      { title, content, author },
      { new: true }
    );
    res.status(200).json(updatedKungoma);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteKungoma = async (req, res) => {
  try {
    const deletedKungoma = await Kungoma.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedKungoma);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
