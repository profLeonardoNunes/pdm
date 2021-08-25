const pessoas = require('./pessoas.json');


//Transforma o array de pessoas em um array de cidades
function testeMap() {
    let cidades = pessoas.map((item) => {
        return item.cidade;
    });
    console.log(cidades);
}

//Filtra as pessoas maiores de idade
function testeFilter() {
    let maiores = pessoas.filter((item) => {
        return item.idade >= 18;
    });
    console.log(maiores);
}

//Percorre todos os elementos de um vetor e aplica uma lógica qualquer escolhida por você
function testeForEach() {
    pessoas.forEach((item) => {
        console.log(`${item.nome}: ${item.idade}`);
    });
}

//Realiza um calculo iterativo com basenos elementos do array
function testeReduce() {
    const numero = [2, 3, 3, 2];
    let resultado = numero.reduce((resultado, elemento) => {
        return resultado + elemento;
    }, 0);
    console.log(resultado);
}

//Faz uma busca dentro de um array com base em uma proposição
function testeFind() {
    let busca = pessoas.find((el) => {
        return el.idade > 10;
    });
    console.log(busca);

}
//Verifica se há pelo menos um elemento que atenda uma proposição
function testeSome() {
    let busca = pessoas.some((item) => {
        return item.idade < 18;
    });
    console.log(busca);
}

//Verifica se todos os elementos atendem uma proposição
function testeEvery() {
    let busca = pessoas.every((item) => {
        return item.idade > 18;
    });
    console.log(busca);
}

