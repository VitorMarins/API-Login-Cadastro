const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
});

module.exports = mongoose.model('Turma', TurmaSchema);
