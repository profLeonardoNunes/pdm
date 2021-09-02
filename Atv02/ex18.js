const pessoas = require('./Pessoas.json');



pessoas.forEach(p => {
    console.log(`
    Estado: ${p.estado}, 
    Cidade: ${p.cidade},
    Endereço: ${p.endereco},
    Número: ${p.numero},
    Bairro: ${p.bairro}`);
});

