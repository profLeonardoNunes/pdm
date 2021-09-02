const pessoas = require('./Pessoas.json');


const qtd = pessoas.filter((p) => {
    return p.idade >= 18
}).length;

console.log(qtd);