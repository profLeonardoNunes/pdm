const carros = require('./Veiculos.json');

function pesquisar(busca) {
    const carro = carros.find(carro => {
        return carro.modelo == busca;
    });

    return carro;
}

console.log(pesquisar("Suprema Diamond"));