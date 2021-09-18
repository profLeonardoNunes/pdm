const feriados = require('./Feriados.json');
const moment = require('moment');

function procuraFeriado(nome) {
    return feriados.find(p => {
        return p.name === nome;
    });
}

const feriado = procuraFeriado("Nossa Senhora Aparecida");
feriado ? console.log(moment(feriado.date).format("DD/MM/YYYY")) : console.log("Não encontrado");
