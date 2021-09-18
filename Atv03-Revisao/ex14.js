const carros = require('./Veiculos.json');


const carrosIdade = carros.sort((a, b) => {
    return a.anoModelo - b.anoModelo;
});

console.log(`O carro mais novo é: ${carrosIdade[carrosIdade.length - 1].modelo}`);

