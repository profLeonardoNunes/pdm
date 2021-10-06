const produtos = require('./produtos.json');

let i = 0;
let prod = {};
let maiscaro;
produtos.forEach(p => {
    const preco = parseFloat(p.precoVenda);
    if (i === 0) {
        maiscaro = preco;
        prod = p;
    }
    else {
        if (maiscaro < preco) {
            maiscaro = preco;
            prod = p;
        }
    }
    i++;
});
console.log(prod);

