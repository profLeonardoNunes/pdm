const axios = require('axios');
let filmes = [];


// const f = axios('https://sujeitoprogramador.com/r-api/?api=filmes')
//     .then(response => {
//         filmes = response.data;
//         filmes.forEach((filme) => {
//             console.log(filme.nome);
//         });
//     });

async function getFilmes() {
    let dados = await axios('https://sujeitoprogramador.com/r-api/?api=filmes');
    filmes = dados.data;
    console.log(filmes);
    return filmes;
}

getFilmes();
