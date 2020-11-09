const express = require('express');
const router = express.Router();

const NoteController = require('./controllers/NoteController');

router.get('/ping', NoteController.ping);

router.get('/notes', NoteController.all);           // Pega todas as notas (id, Titulo)
router.get('/note/:id', NoteController.one);       // Pega uma nota
router.post('/note', NoteController.new);           // Adiciona nova nota
router.put('/note/:id', NoteController.edit);       // Altera uma nota existente
router.delete('/note/:id', NoteController.delete);  // Deleta uma rota

module.exports = router;