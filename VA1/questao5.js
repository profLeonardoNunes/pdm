const produtos = require('./produtos.json');

//Cria-se um array sem repetição de departamentos.
const departamentos = produtos.map(p => {
    return p.Departamento;
}).filter((elem, pos, este) => {
    return este.indexOf(elem) === pos;
});

//calcula o valor médio
departamentos.forEach(dep => {
    //Filtra os produtos departamento a departamento
    const produtosFiltrados = produtos.filter(p => {
        return p.Departamento == dep;
    });

    //Soma o valor dos produtos por departamento
    const vrtotal = produtosFiltrados.reduce((soma, p) => {
        return soma + parseFloat(p.precoCusto);
    }, 0);
    const precoMedio = vrtotal / produtosFiltrados.length;

    console.log(dep + ": " + precoMedio);
});
