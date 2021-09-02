const pessoas = require('./Pessoas.json');
const fs = require('fs');
function Gravar(pessoa) {
    json = JSON.stringify(pessoa);
    fs.writeFile('ex20.json', json, 'utf8', () => {
        console.log("Arquivo gerado com sucesso");
    });
}

const filtrado = pessoas.filter((p) => {
    const altura = parseFloat(p.altura.replace(',', '.'));
    return p.idade >= 30 && p.peso / Math.pow(altura, 2) > 25;
});

Gravar(filtrado);