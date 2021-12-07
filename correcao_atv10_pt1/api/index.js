const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');
const { Console } = require('console');
app.use(express.json());
app.use(cors());
const caminho = './pessoas.json';

function GravarArquivo(pessoas) {
    fs.writeFile(caminho, JSON.stringify(pessoas, null, 4), () => {
        console.log('Gravado com sucesso');
    });
}


function Listar(req, res) {
    const pessoas = require(caminho);
    res.send(pessoas);
}

function ConsultaPorNome(req, res) {
    const pessoas = require(caminho);
    const pessoa = pessoas.filter(p => {
        return p.nome === req.params.nome;
    });
    res.send(pessoa);
}
function ConsultaPorCpf() {

}
function Cadastrar(req, res) {
    let pessoas = require(caminho);
    const pessoa = req.body;
    pessoas.push(pessoa);
    GravarArquivo(pessoas);
    res.send({ Mensagem: "Pessoa cadastrada com sucesso" });
}

app.get('/', (req, res) => {
    res.send({ Mensagem: "Aplicação OK" });
})
app.get('/pessoas', (req, res) => {
    Listar(req, res);
})
app.get('/pessoas/nome/:nome', (req, res) => {
    ConsultaPorNome(req, res);
})

app.post('/pessoas', (req, res) => {
    Cadastrar(req, res);
})

app.listen(port, () => {
    console.log("Aplicação iniciada na porta " + port);
})