const pessoas = require('./Pessoas.json');

const end = pessoas.map(p => {
    let pessoa = {
        nome: p.nome,
        estado: p.estado,
        cidade: p.cidade,
        endereco: p.endereco,
        numero: p.numero,
        bairro: p.bairro
    }
    return pessoa;
}).find(p => {
    return p.nome == "Raul Nathan Oliver Dias"
});
console.log(end);

