const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

UsuarioSchema.pre('save', async function(next) {
  if (this.isModified('senha')) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

UsuarioSchema.methods.compareSenha = function(senha) {
  return bcrypt.compare(senha, this.senha);
};

module.exports = mongoose.model('Usuario', UsuarioSchema);
