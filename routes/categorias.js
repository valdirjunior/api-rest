const express = require('express');
const router = express.Router();
const { categorias } = require('../data/db');

// GET /categorias - Listar todas, com filtros e paginação
router.get('/', (req, res) => {
    let resultado = categorias;

    // Filtro por nome
    if (req.query.nome) {
        resultado = resultado.filter(c => c.nome.toLowerCase().includes(req.query.nome.toLowerCase()));
    }

    // Ordenação
    if (req.query.ordenar) {
        resultado = resultado.sort((a, b) => {
            if (a[req.query.ordenar] < b[req.query.ordenar]) return -1;
            if (a[req.query.ordenar] > b[req.query.ordenar]) return 1;
            return 0;
        });
    }

    // Paginação
    const pagina = parseInt(req.query.pagina) || 1;
    const limite = parseInt(req.query.limite) || 5;
    const inicio = (pagina - 1) * limite;
    const fim = inicio + limite;

    const paginado = resultado.slice(inicio, fim);

    res.status(200).json({
        total: resultado.length,
        pagina,
        limite,
        dados: paginado
    });
});

// GET /categorias/:id - Buscar uma categoria
router.get('/:id', (req, res) => {
    const categoria = categorias.find(c => c.id == req.params.id);
    if (categoria) {
        res.json(categoria);
    } else {
        res.status(404).json({ erro: 'Categoria não encontrada' });
    }
});

// POST /categorias - Criar uma categoria
router.post('/', (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: 'Nome da categoria é obrigatório' });
    }
    const novaCategoria = {
        id: categorias.length + 1,
        nome
    };
    categorias.push(novaCategoria);
    res.status(201).json(novaCategoria);
});

// PUT /categorias/:id - Atualizar categoria inteira
router.put('/:id', (req, res) => {
    const index = categorias.findIndex(c => c.id == req.params.id);
    if (index === -1) {
        return res.status(404).json({ erro: 'Categoria não encontrada' });
    }
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ erro: 'Nome da categoria é obrigatório' });
    }
    categorias[index] = { id: categorias[index].id, nome };
    res.json(categorias[index]);
});

// PATCH /categorias/:id - Atualizar parte da categoria
router.patch('/:id', (req, res) => {
    const categoria = categorias.find(c => c.id == req.params.id);
    if (!categoria) {
        return res.status(404).json({ erro: 'Categoria não encontrada' });
    }
    Object.assign(categoria, req.body);
    res.json(categoria);
});

// DELETE /categorias/:id - Deletar uma categoria
router.delete('/:id', (req, res) => {
    const index = categorias.findIndex(c => c.id == req.params.id);
    if (index === -1) {
        return res.status(404).json({ erro: 'Categoria não encontrada' });
    }
    categorias.splice(index, 1);
    res.status(204).send();
});

module.exports = router;
