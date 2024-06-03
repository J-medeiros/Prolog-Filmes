const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const filmesRoutes = require('./routes/filmes.routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());  // Habilitando CORS para todas as rotas

app.use('/filmes', filmesRoutes);

// Endpoint para verificar se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor está rodando');
});

module.exports = app;
