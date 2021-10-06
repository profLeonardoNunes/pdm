const produtos = require('./produtos.json');


const existe = produtos.some(p => {
    const qtdEstoque = parseFloat(p.qtdEstoque);
    const qtdEstoqueMaximo = parseFloat(p.qtdEstoqueMaximo);
    return qtdEstoque > qtdEstoqueMaximo;
});

console.log(existe);
