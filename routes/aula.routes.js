const express = require('express');
const { getAula, getAulaById, createAula, updateAula, deleteAula } = require('../controllers/aula.controller');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/', authMiddleware, getAula);


router.get('/:id', authMiddleware, getAulaById);


router.post('/', authMiddleware, createAula);


router.put('/:id', authMiddleware, updateAula);


router.delete('/:id', authMiddleware, deleteAula);

module.exports = router;
