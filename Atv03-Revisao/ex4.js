const feriados = require('./Feriados.json');

function procuraFeriado(data) {
    return feriados.find(p => {
        return p.date === data;
    });
}

const feriado = procuraFeriado("2021-12-25");
feriado ? console.log(feriado.name) : console.log("Não é feriado");
