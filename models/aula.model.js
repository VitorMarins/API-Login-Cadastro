const mongoose = require('mongoose');

const AulaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  datahora: { type: Date, required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  turma: { type: mongoose.Schema.Types.ObjectId, ref: 'Turma', required: true },
});

module.exports = mongoose.model('Aula', AulaSchema);
