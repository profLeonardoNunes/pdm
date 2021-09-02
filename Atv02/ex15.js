const pessoas = require('./Pessoas.json');

pessoas.forEach(p => {
    console.log(`Nome: ${p.nome} - Endereço: ${p.endereco}`);
});