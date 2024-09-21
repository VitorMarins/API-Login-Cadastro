const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.model');
const config = require('../config/jwt');

exports.registrar = async (req, res) => {
  try {
    const { username, password } = req.body;
    const usuario = new Usuario({ username, password });
    await usuario.save();
    res.status(201).json({ message: 'Usuario registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const usuario = await Usuario.findOne({ username });
    if (!usuario || !(await usuario.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: usuario._id }, config.secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
