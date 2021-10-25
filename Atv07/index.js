const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const caminho = "./contatos.json";
app.use(express.json());


function CriarArquivo() {
    fs.exists(caminho, (exists) => {
        if (!exists) {
            fs.writeFile(caminho, '[]', 'utf8', () => {
                console.log("Novo json criado com sucesso");
            });
        }
    });
}

function SalvarAlteracoes(contatos) {
    fs.writeFile(caminho, JSON.stringify(contatos, null, 4), () => {
        console.log('Alterações salvas com sucesso!');
    });
}

function Gravar(contato) {
    let contatos = require(caminho);
    const existe = contatos.some(c => {
        return c.cpf == contato.cpf;
    });

    if (!existe) {
        contatos.push(contato);
        SalvarAlteracoes(contatos);
        return { mensagem: "Contato armazenado com sucesso" };
    }
    else {
        return { mensagem: "Esse cpf ja está cadastrado" };
    }

}

function Listar() {
    const contatos = require(caminho);
    return contatos;
}

function ListarPorNome(nome) {
    let contatos = require(caminho);
    contatos = contatos.filter(c => {
        return c.nome == nome;
    });
    return contatos;
}

function ListarPorCPF(cpf) {
    let contatos = require(caminho);
    contatos = contatos.filter(c => {
        return c.cpf == cpf;
    });
    return contatos;
}

function ListarPorTelefone(telefone) {
    let contatos = require(caminho);
    contatos = contatos.filter(c => {
        return c.telefones.some(tel => {
            return tel.numero == telefone;
        });
    });
    return contatos;
}

function Remover(cpf) {
    let contatos = require(caminho);
    const pos = contatos.map(c => {
        return c.cpf;
    }).indexOf(cpf);
    contatos.splice(pos)
    SalvarAlteracoes(contatos);
    return { mensagem: "Contato removido com sucesso" };
}

function RemoverTelefone(telefone) {
    let contatos = require(caminho);
    let msg;
    contatos.forEach(c => {
        const pos = c.telefones.map(tel => {
            return tel.numero;
        }).indexOf(telefone);
        if (pos > 0) {
            c.telefones.splice(pos,1);
            msg = { mensagem: "Telefone removido com sucesso" };
        }
        else {
            msg = { mensagem: "Telefone não foi encontrado" };
        }
    });
    SalvarAlteracoes(contatos);
    return msg;


}

function Editar(req) {
    let contatos = require(caminho);
    const pos = contatos.map(c => {
        return c.cpf;
    }).indexOf(req.params.cpf);
    contatos[pos] = req.body;

    SalvarAlteracoes(contatos);
    return { Mensagem: "Contato editado com sucesso!" };
}

CriarArquivo();

//Armazena um contato
app.post("/contatos", (req, res) => {
    res.send(Gravar(req.body));
});

//Lista todos os contatos
app.get("/contatos", (req, res) => {
    res.send(Listar());
});

//Lista contatos por nome
app.get("/contatos/nome/:nome", (req, res) => {
    res.send(ListarPorNome(req.params.nome));
});

//Lista contatos por CPF
app.get("/contatos/cpf/:cpf", (req, res) => {
    res.send(ListarPorCPF(req.params.cpf));
});

//Lista contatos por Telefone
app.get("/contatos/telefone/:telefone", (req, res) => {
    res.send(ListarPorTelefone(req.params.telefone));
});

//Deleta um contato com base no cpf
app.delete("/contatos/cpf/:cpf", (req, res) => {
    res.send(Remover(req.params.cpf));
});

//Deleta um telefone com base no telefone
app.delete("/contatos/telefone/:telefone", (req, res) => {
    res.send(RemoverTelefone(req.params.telefone));
});

//Edita um usuario com base em um CPF
app.put("/contatos/editar/:cpf", (req, res) => {
    res.send(Editar(req));
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});


