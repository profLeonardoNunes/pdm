const carros = require('./Veiculos.json');

const veiculos = carros
    .filter(carro => {
        return carro.anoModelo <= 2000;
    })
    .sort((a, b) => {

        const precoA = a.valor.replace('R$ ', '').replace('.', '').replace(',', '.');
        const precoB = b.valor.replace('R$ ', '').replace('.', '').replace(',', '.');

        return precoA - precoB;
    });

console.log(`O carro mais caro é: ${veiculos[veiculos.length - 1].modelo}`);

