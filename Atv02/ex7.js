const pessoas = require('./Pessoas.json');

let estado = pessoas.map(p => {
    return p.estado;
}).filter((elem, pos, este) => {
    return este.indexOf(elem) === pos;
}).sort();

let qtdPorEstado = estado.map(e => {
    let qtdPessoas = pessoas.filter(p => {
        return p.estado === e;
    })

    return [e, qtdPessoas.length];
});

console.log(qtdPorEstado);