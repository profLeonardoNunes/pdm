const feriados = require('./Feriados.json');
const moment = require('moment');
const a = feriados.length;

console.log("primeiro feriado: " + moment(feriados[0].date).format("DD/MM/YYYY") + " - " + feriados[0].name);
console.log("Último feriado: " + moment(feriados[a - 1].date).format("DD/MM/YYYY") + " - " + feriados[a - 1].name);


