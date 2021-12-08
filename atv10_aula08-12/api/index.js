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
    let dados = [];
    pessoas.forEach(p => {
        p.imc = (parseFloat(p.peso) / (parseFloat(p.altura) * parseFloat(p.altura))).toFixed(2);
        dados.push(p);
    });
    res.send(dados);
}

function Consulta(req, res) {
    const pessoas = require(caminho);
    const pessoa = pessoas.filter(p => {
        return p.nome == req.params.busca || p.cpf == req.params.busca;
    });
    pessoa[0].imc = (parseFloat(pessoa[0].peso) / (parseFloat(pessoa[0].altura) * parseFloat(pessoa[0].altura))).toFixed(2);
    res.send(pessoa);
}

function Cadastrar(req, res) {
    let pessoas = require(caminho);
    const pessoa = req.body;
    pessoas.push(pessoa);
    GravarArquivo(pessoas);
    res.send({ Mensagem: "Pessoa cadastrada com sucesso" });
}

function Remover(req, res) {
    let pessoas = require(caminho);
    let pos = -1;

    pessoas.forEach((p, i) => {
        if (p.cpf == req.params.cpf) {
            pos = i;
        }
    });

    if (pos >= 0) {
        pessoas.splice(pos, 1);
        GravarArquivo(pessoas);
        res.send({ Mensagem: "Registro deletado com sucesso" });
    }
    else {
        res.send({ Mensagem: "Não encontrado ninguem com esse CPF" });
    }


}


app.get('/', (req, res) => {
    res.send({ Mensagem: "Aplicação OK" });
})
app.get('/pessoas', (req, res) => {
    Listar(req, res);
})
app.get('/pessoas/consultar/:busca', (req, res) => {
    Consulta(req, res);
})

app.post('/pessoas', (req, res) => {
    Cadastrar(req, res);
})

app.delete('/pessoas/:cpf', (req, res) => {
    Remover(req, res);
})
app.listen(port, () => {
    console.log("Aplicação iniciada na porta " + port);
})