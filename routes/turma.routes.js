const express = require('express');
const {
  getTurma,
  getTurmaById,
  createTurma,
  updateTurma,
  deleteTurma,
  getTurmaByUserId
} = require('../controllers/turma.controller');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/', authMiddleware, getTurma);


router.get('/:id', authMiddleware, getTurmaById);


router.post('/', authMiddleware, createTurma);


router.put('/:id', authMiddleware, updateTurma);


router.delete('/:id', authMiddleware, deleteTurma);


router.get('/user/:userId', authMiddleware, getTurmaByUserId);

module.exports = router;
