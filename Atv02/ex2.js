const pessoas = require('./Pessoas.json');

const imcs = pessoas.map((p) => {
    const altura = parseFloat(p.altura.replace(',', '.'));
    return p.peso / Math.pow(altura, 2);
}).reduce((soma, imc) => {
    return soma + imc;
}, 0);

console.log(imcs / pessoas.length);