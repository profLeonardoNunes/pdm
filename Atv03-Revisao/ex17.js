const carros = require('./Veiculos.json');

function pesquisar(busca) {
    const carro = carros.find(carro => {
        return carro.codigoFipe == busca;
    });

    return carro;
}

console.log(pesquisar("004108-4"));