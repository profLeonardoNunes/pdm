const pessoas = require('./Pessoas.json');

let pessoa_idade = pessoas.map(p => {
    let pessoa = {
        nome: p.nome,
        idade: p.idade
    }
    return pessoa;
});

const ordenada = pessoa_idade.sort((a, b) => {
    return a.idade - b.idade;
})
console.log(ordenada[ordenada.length - 1]);