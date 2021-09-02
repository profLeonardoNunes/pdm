const pessoas = require('./Pessoas.json');

const acima80 = pessoas.filter(p => {
    return p.peso > 80;
});

console.log(acima80.length);