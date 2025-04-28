const express = require('express');
const cors = require('cors');
const app = express();

const produtosRouter = require('./routes/produtos');
const categoriasRouter = require('./routes/categorias');

app.use(cors());
app.use(express.json());

//rotas
app.use('/api/v1/produtos', produtosRouter);
app.use('/api/v1/categorias', categoriasRouter);

//rota principal
app.get('/', (req, res) => {
    res.json({mensagem: 'API Rest de Produtos e Categorias'});
});

//tratamento de erro 404
app.use((req, res) => {
    res.status(404).json({erro: 'Rota não encontrada0'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
