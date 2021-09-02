const pessoas = require('./Pessoas.json');

const pos = pessoas.map((p) => {
    return p.nome;
}).indexOf("Laura Eduarda da Cunha");

console.log(pos);