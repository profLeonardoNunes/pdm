const pessoas = require('./Pessoas.json');
const existe = pessoas.some((p) => {
    return p.idade < 18;
})
existe ? console.log("Sim") : console.log("Não");
