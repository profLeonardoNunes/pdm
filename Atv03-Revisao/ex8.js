const carros = require('./Veiculos.json');

let marcas = carros.map(p => {
    return p.marca;
}).filter((elem, pos, este) => {
    return este.indexOf(elem) === pos;
});

marcas.forEach((el) => {
    let qtd = carros.filter(c => { return c.marca == el }).length;
    let valor = carros.reduce((soma, c) => {
        let valor = parseFloat(c.valor.replace('R$ ', '').replace('.', '').replace(',', '.'));
        if (el == c.marca) {
            return soma + valor;
        }
        else {
            return soma;
        }

    }, 0);
    console.log(el + " - " + valor / qtd);
});