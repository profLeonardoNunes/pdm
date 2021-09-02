const pessoas = require('./Pessoas.json');



const alturas = pessoas.reduce((soma, item) => {
    return soma + parseFloat(item.altura.replace(',', '.'));
}, 0);

console.log(alturas / pessoas.length);