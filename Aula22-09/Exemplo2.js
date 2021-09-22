console.log('Oi');

let i = 0;
const teste = setInterval(() => {
    console.log("Contagem " + i);
    i > 2 ? clearInterval(teste) : i++;
}, 1000)

console.log('Tchau!');