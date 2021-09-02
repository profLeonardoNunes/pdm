const pessoas = require('./Pessoas.json');

let cidades = pessoas.map(p => {
    return p.cidade;
}).filter((elem, pos, este) => {
    return este.indexOf(elem) === pos;
});

console.log(cidades);