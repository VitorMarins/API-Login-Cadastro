const Turma = require('../models/turma.model');
const Usuario = require('../models/usuario.model');

exports.getTurma = async (req, res) => {
  try {
    const turma = await Turma.find().populate('usuario');
    res.json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTurmaById = async (req, res) => {
  try {
    const turma = await Turma.findById(req.params.id).populate('usuario');
    if (!turma) {
      return res.status(404).json({ message: 'Turma não encontrada' });
    }
    res.json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTurma = async (req, res) => {
  try {
    const turma = new Turma(req.body);
    await turma.save();
    res.status(201).json(turma);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTurma = async (req, res) => {
  try {
    const turma = await Turma.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!turma) {
      return res.status(404).json({ message: 'Turma não encontrada' });
    }
    res.json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTurma = async (req, res) => {
  try {
    await Turma.findByIdAndDelete(req.params.id);
    res.json({ message: 'Turma deletada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTurmaByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Verifique se o usuário existe
    const usuario = await Usuario.findById(userId);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Encontre todas as turmas associadas a esse usuário
    const turma = await Turma.find({ usuario: userId });

    res.status(200).json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
