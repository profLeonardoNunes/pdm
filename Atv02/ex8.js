const pessoas = require('./Pessoas.json');


const opositivo = pessoas.filter(p => {
    return p.tipo_sanguineo === "O+";
})

opositivo.length > 0 ? console.log(`Sim: ${opositivo.length}`) : console.log("Não")
