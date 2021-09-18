const carros = require('./Veiculos.json');

function pesquisar(busca) {
    const carrosPorCombustivel = carros.filter(carro => {
        return carro.combustivel == busca;
    });

    return carrosPorCombustivel;
}

console.log(pesquisar("Gasolina"));