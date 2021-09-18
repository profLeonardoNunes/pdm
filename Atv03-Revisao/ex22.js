const carros = require('./Veiculos.json');

const soma = carros
    .filter(carro => {
        return carro.anoModelo <= 2005;
    })
    .reduce((soma, carro) => {
        const preco = parseFloat(carro.valor.replace('R$ ', '').replace('.', '').replace(',', '.'));
        return soma + preco;
    }, 0);

console.log(soma);