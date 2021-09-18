const carros = require('./Veiculos.json');

const marcas = carros
    .map(carro => {
        return carro.marca;
    })
    .filter((elem, pos, este) => {
        return este.indexOf(elem) === pos;
    });

marcas.forEach(marca => {
    const modelos = carros
        .filter(carro => {
            return carro.marca == marca;
        }).map(carro => {
            return carro.modelo;
        });
    console.log(marca);
    console.log(modelos);
});

