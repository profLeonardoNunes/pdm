const express = require('express');
const pessoas = require('./pessoas.json');
const app = express();
const port = 3000;
app.use(express.json());

function CalcularIMC(pessoa) {
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    const p = {
        nome: pessoa.nome,
        imc: imc
    };
    return p;
}

app.get('/', (req, res) => {
    res.send("OK!");
});
app.get('/filtrar', (req, res) => {

    res.send(req.query);
});
app.get('/:nome', (req, res) => {

    res.send(req.params.nome);
});
app.get('/imc', (req, res) => {
    const pessoa = req.body;
    res.send(CalcularIMC(pessoa));
});

app.post('/', (req, res) => {
    res.send(200);
});





app.listen(port, () => {
    console.log(`App Listening on port ${port}`);
});