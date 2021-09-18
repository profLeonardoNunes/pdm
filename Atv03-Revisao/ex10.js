const carros = require('./Veiculos.json');


const carrosPreco = carros.map(p => {
    let c = {
        modelo: p.modelo,
        preco: parseFloat(p.valor.replace('R$ ', '').replace('.', '').replace(',', '.'))
    }
    return c;
});

const ordenado = carrosPreco.sort((a, b) => {
    return a.preco - b.preco;
});
console.log(`O carro mais caro é:  ${ordenado[0].modelo}`);


