const pessoas = require('./Pessoas.json');



const idades = pessoas.reduce((soma, item) => {
    return soma + item.idade;
}, 0);

console.log(idades / pessoas.length);