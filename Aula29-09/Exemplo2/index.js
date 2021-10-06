const express = require('express');
const pessoas = require('./pessoas.json');
const app = express();
const port = 3000;
app.use(express.json());

function filtrar(busca) {
    const pessoa = pessoas.filter(p => {
        return p.idade == busca;
    });
    return pessoa;
}

app.get('/', (req, res) => {
    console.log(req.query);
    res.send(pessoas);
});

app.get('/filtrar/:idade', (req, res) => {
    res.send(filtrar(req.params.idade));
});

app.post('/', (req, res) => {
    const pessoa = req.body;
    res.send(pessoa);
});

app.listen(port, () => {
    console.log(`App Listening on port ${port}`);
});