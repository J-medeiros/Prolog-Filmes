const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmes.controllers');

router.post('/consultar/filmes_por_diretor', filmesController.consultarFilmesPorDiretor);
router.post('/consultar/filmes_por_ano', filmesController.consultarFilmesPorAno);
router.post('/consultar/diretores_por_filme', filmesController.consultarDiretoresPorFilme);
router.put('/adicionar_filme', filmesController.adicionarFilme);

module.exports = router;
