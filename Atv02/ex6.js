const pessoas = require('./Pessoas.json');


let estado = pessoas.map(p => {
    return p.estado;
}).filter((elem, pos, este) => {
    return este.indexOf(elem) === pos;
}).sort();

console.log(estado);