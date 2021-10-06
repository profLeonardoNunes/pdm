const produtos = require('./produtos.json');



produtos.forEach(produto => {
    const estoqueMedio = (parseFloat(produto.qtdEstoqueMinimo) + parseFloat(produto.qtdEstoqueMaximo)) / 2;
    console.log(produto.nome + ": " + estoqueMedio);
});
