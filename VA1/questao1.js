const produtos = require('./produtos.json');


function Pesquisar(busca) {
    const produto = produtos.find(p => {
        return p.codigo == busca;
    });
    return produto;
}


console.log(Pesquisar("2598"));
