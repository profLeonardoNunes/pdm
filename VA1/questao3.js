const produtos = require('./produtos.json');


const departamentos = produtos
    .map(produto => {
        return produto.Departamento;
    }).filter((elem, pos, este) => {
        return este.indexOf(elem) === pos;
    });

departamentos.forEach(departamento => {
    const qtd = produtos.filter(produto => {
        return produto.Departamento === departamento;
    }).length;
    console.log(departamento);
    console.log(qtd);
});

