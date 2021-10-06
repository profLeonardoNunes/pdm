const produtos = require('./produtos.json');

function Pesquisar(busca) {
    const produto = produtos.find(p => {
        return p.codigo == busca;
    });
    if (produto) {
        if (parseFloat(produto.qtdEstoque) > parseFloat(produto.qtdEstoqueMaximo)) {
            return produto.nome + ": Acima do estoque máximo";
        }
        else if (parseFloat(produto.qtdEstoque) < parseFloat(produto.qtdEstoqueMinimo)) {
            return produto.nome + ": Abaixo do estoque minimo";
        }
        else {
            return produto.nome + ": Entre estoque minimo e maximo";
        }
    }
    else {
        return "Produto não encontrado";
    }
}

console.log(Pesquisar("4543"));