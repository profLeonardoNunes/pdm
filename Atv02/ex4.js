const pessoas = require('./Pessoas.json');


const qtd = pessoas.reduce((soma, p) => {
    if (p.idade >= 20 && p.idade <= 45) {
        return ++soma;
    }
    else {
        return soma;
    }
}, 0);

console.log(qtd);