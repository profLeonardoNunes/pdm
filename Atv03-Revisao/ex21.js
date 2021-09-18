const carros = require('./Veiculos.json');


const fabricantes = carros
    .map(carro => {
        return carro.marca;
    })
    .filter((elem, pos, este) => {
        return este.indexOf(elem) === pos;
    })
    .forEach(fabricante => {
        const preco = carros
            .filter(carro => {
                return carro.marca === fabricante;
            })
            .reduce((soma, carro) => {
                const preco = parseFloat(carro.valor.replace('R$ ', '').replace('.', '').replace(',', '.'));
                return soma + preco;
            }, 0);

        console.log(fabricante + ' - ' + preco);
    });