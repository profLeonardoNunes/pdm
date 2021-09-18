const carros = require('./Veiculos.json');


const carrosIdade = carros.sort((a, b) => {
    return a.anoModelo - b.anoModelo;
});

console.log(`O carro mais antigo é: ${carrosIdade[0].modelo}`);

