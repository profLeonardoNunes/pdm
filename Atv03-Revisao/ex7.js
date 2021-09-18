const carros = require('./Veiculos.json');

let qtd = carros.map(p => {
    return p.marca;
}).filter((elem, pos, este) => {
    return este.indexOf(elem) === pos;
}).length;

console.log(`Existem ${qtd} marcas`);