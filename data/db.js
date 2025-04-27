const produtos = [
    {id: 1, nome: 'Notebook Gamer Dell', preco: 4500.00, categoriaID: 1},
    {id: 2, nome: 'Smartphone Galaxy S24', preco: 3500.00, categoriaID: 2},
    {id: 3, nome: 'Mouse Gamer RGB', preco: 150.00, categoriaID: 3},
    {id: 4, nome: 'Teclado Mecânico', preco: 300.00, categoriaID: 3},
    {id: 5, nome: 'Monitor 27" 144hz', preco: 1600.00, categoriaID: 4},
    {id: 6, nome: 'Cadeira Gamer', preco: 1200.00, categoriaID: 5},
    {id: 7, nome: 'Tablet iPad Air', preco: 4200.00, categoriaID: 2},
    {id: 8, nome: 'Headset Wireless', preco: 600.00, categoriaID: 3},
    {id: 9, nome: 'Impressora Laser', preco: 950.00, categoriaID: 6},
    {id: 10, nome: 'HD Externo 2TB', preco: 500.00, categoriaID: 7}
];

const categorias = [
    {id: 1, nome: 'Computadores'},
    {id: 2, nome: 'Celulares e Tablets'},
    {id: 3, nome: 'Periféricos'},
    {id: 4, nome: 'Monitores'},
    {id: 5, nome: 'Móveis para Escritório'},
    {id: 6, nome: 'Impressoras'},
    {id: 7, nome: 'Armazenamento'},
];

module.exports = {produtos, categorias};