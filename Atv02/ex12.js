const pessoas = require('./Pessoas.json');

let pessoa_alturas = pessoas.map(p => {
    let pessoa = {
        nome: p.nome,
        altura: parseFloat(p.altura.replace(',', '.'))
    }
    return pessoa;
});

const ordenada = pessoa_alturas.sort((a, b) => {
    return a.altura - b.altura;
})
console.log(ordenada[0]);


