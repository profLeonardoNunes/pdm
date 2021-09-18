const feriados = require('./Feriados.json');
const moment = require('moment');

function procuraFeriado(nome) {
    return feriados.find(p => {
        return p.name == nome;
    });
}

console.log(procuraFeriado("Proclamação da República"));