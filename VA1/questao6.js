const produtos = require('./produtos.json');



produtos.forEach(produto => {
    const lucro = parseFloat(produto.precoVenda) - parseFloat(produto.precoCusto);
    const porcentagem = lucro / parseFloat(produto.precoCusto) * 100;
    console.log(produto.nome + ": " + porcentagem);
});
