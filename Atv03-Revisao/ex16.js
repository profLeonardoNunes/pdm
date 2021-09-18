const carros = require('./Veiculos.json');


const combustiveis = carros
    .map(carro => {
        return carro.combustivel;
    })
    .filter((elem, pos, este) => {
        return este.indexOf(elem) === pos;
    })
    .forEach(comb => {
        const qtd = carros.filter(c => {
            return c.combustivel === comb;
        }).length;
        console.log(comb + ' - ' + qtd);
    });


