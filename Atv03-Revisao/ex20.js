const carros = require('./Veiculos.json');



const valorTotal = carros.reduce((soma, carro) => {
    const preco = parseFloat(carro.valor.replace('R$ ', '').replace('.', '').replace(',', '.'));
    return soma + preco;
}, 0);


console.log(valorTotal);