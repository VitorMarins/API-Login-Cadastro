const Aula = require('../models/aula.model');

exports.getAula = async (req, res) => {
  try {
    const aula = await Aula.find().populate('usuario').populate('turma');
    res.json(aula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAulaById = async (req, res) => {
  try {
    const aula = await Aula.findById(req.params.id).populate('usuario').populate('turma');
    if (!aula) {
      return res.status(404).json({ message: 'Aula não encontrada' });
    }
    res.json(aula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAula = async (req, res) => {
  try {
    const aula = new Aula(req.body);
    await aula.save();
    res.status(201).json(aula);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateAula = async (req, res) => {
  try {
    const aula = await Aula.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!aula) {
      return res.status(404).json({ message: 'Aula não encontrada' });
    }
    res.json(aula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAula = async (req, res) => {
  try {
    await Aula.findByIdAndDelete(req.params.id);
    res.json({ message: 'Aula deletada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
