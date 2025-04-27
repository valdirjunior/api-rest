const express = require('express');
const router = express.Router();
const { produtos } = require('../data/db');
const { json } = require('body-parser');

//GET /produtos
router.get('/', (req, res) => {
    let resultado = produtos;

    //filtro por nome
    if(req.query.nome) {
        resultado = resultado.filter(p => p.nome.toLowerCase().includes(req.query.nome.toLowerCase()));
    }

    //ordenação
    if(req.query.ordenar) {
        resultado = resultado.sort((a, b) => {
            if (a[req.query.ordenar] < b[req.query.ordenar]) return -1;
            if (a[req.query.ordenar] > b[req.query.ordenar]) return 1;
            return 0;
        });
    }
    //paginação
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

//GET /produtos/:id
router.get('/:id', (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    if(produto) {
        res.json(produto);
    } else{
        res.status(404).json({erro: 'Produto não encontrado'});
    }
});

//POST /produtos
router.post('/', (req, res) => {
    const {nome, preco, categoriaID} = req.body;
    if(!nome || !preco || !categoriaID) {
        return res.status(400).json({ erro: 'Dados incompletos'});
    }
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        categoriaID
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

//PUT /produtos/:id
router.put('/:id', (req, res) => {
    const index = produtos.findIndex(p => p.id == req.params.id);
    if(index === -1) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    const {nome, preco, categoriaID} = req.body;
    produtos[index] = {id: produtos[index].id, nome, preco, categoriaID};
    res.json(produtos[index]);
});

//PATCH /produtos/:id
router.patch('/:id', (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    if (!produto) {
        return res.status(404),json({ erro: 'Produto não encontrado'});
    }
    Object.assign(produto, req.body);
    res.json(produto);
});

//DELETE /produtos/:id
router.delete('/:id', (req, res) => {
    const index = produtos.findIndex(p => p.id == req.params.id);
    if (index === -1) {
        return res.status(404).json({erro: 'Produto não encontrado'});
    }
    produtos.splice(index, 1);
    res.status(204).send();
});

module.exports = router;