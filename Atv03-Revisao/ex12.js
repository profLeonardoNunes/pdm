const carros = require('./Veiculos.json');

const marcas = carros
    .map(carro => {
        return carro.marca;
    })
    .filter((elem, pos, este) => {
        return este.indexOf(elem) === pos;
    });

marcas.forEach(marca => {
    const qtd = carros
        .filter(carro => {
            return carro.marca == marca;
        }).length;
    console.log(marca + ' - ' + qtd);
});

