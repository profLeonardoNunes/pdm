const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

function CriarArquivo() {
    fs.exists('produtos.json', (exists) => {
        if (!exists) {
            fs.writeFile('produtos.json', '[]', 'utf8', () => {
                console.log("Novo json criado com sucesso");
            });
        }

    });
}

function Listar() {
    const produtos = require('./produtos.json');
    return produtos;
}

function Adicionar(produto) {
    let produtos = require('./produtos.json');

    const existe = produtos.some((p) => {
        return p.codigo === produto.codigo;
    });
    if (!existe) {
        produtos.push(produto);

        fs.writeFile('produtos.json', JSON.stringify(produtos, null, 4), () => {
            console.log('Arquivo gerado');
        });
        return "produto adicionado com sucesso";
    }
    else {
        return "Produto não pode ser adicionado: Código já existe.";
    }

}

function FiltrarPorMarca(marca) {
    const produtos = require('./produtos.json');
    return produtos.filter((p) => {
        return p.marca === marca;
    });
}

function FiltrarPorId(codigo) {
    const produtos = require('./produtos.json');
    return produtos.filter((p) => {
        return p.codigo === codigo;
    });
}

function FiltrarPorNome(nome) {
    const produtos = require('./produtos.json');
    return produtos.filter((p) => {
        return p.nome === nome;
    });
}

function AtualizarProduto(produto) {
    let produtos = require('./produtos.json');
    const pos = produtos.map((p) => {
        return p.codigo;
    }).indexOf(produto.codigo);
    produto.marca ? produtos[pos].marca = produto.marca : null;
    produto.nome ? produtos[pos].nome = produto.nome : null;
    produto.precoCusto ? produtos[pos].precoCusto = produto.precoCusto : null;
    produto.precoVenda ? produtos[pos].precoVenda = produto.precoVenda : null;
    produto.quantidadeEstoque ? produtos[pos].quantidadeEstoque = produto.quantidadeEstoque : null;
    produto.categoria ? produtos[pos].categoria = produto.categoria : null;

    fs.writeFile('produtos.json', JSON.stringify(produtos, null, 4), () => {
        console.log('Arquivo gerado');
    });

}

function Vender(codigo, quantidade) {
    let produtos = require('./produtos.json');
    const pos = produtos.map((p) => {
        return p.codigo;
    }).indexOf(codigo);
    if (produtos[pos].quantidadeEstoque >= quantidade) {
        produtos[pos].quantidadeEstoque -= quantidade;
        fs.writeFile('produtos.json', JSON.stringify(produtos, null, 4), () => {
            console.log('Arquivo gerado');
        });
        return `Valor total da venda: ${quantidade * produtos[pos].precoVenda}`;
    }
    else {
        return `Não foi possivel realizar a venda, quantidade em estoque indisponivel`;
    }
}

function VenderVarios(venda) {
    let msg = [];


    venda.forEach(item => {
        msg.push(Vender(item.codigo, item.quantidade));
    });
    return msg;
}

CriarArquivo();


app.get('/produtos', (req, res) => {
    if (req.query.nome) {
        res.send(FiltrarPorNome(req.query.nome));
    }
    res.send(Listar());
});

app.post('/produtos', (req, res) => {
    console.log(req.body);
    res.send(Adicionar(req.body));
});

app.get('/produtos/marca/:marca', (req, res) => {
    res.send(FiltrarPorMarca(req.params.marca));
})

app.get('/produtos/:codigo', (req, res) => {
    res.send(FiltrarPorId(req.params.codigo));
})

app.put('/produtos', (req, res) => {
    AtualizarProduto(req.body);
    res.send({ mensagem: "Produto atualizado com sucesso!" });
});
app.put('/produtos/vender/:codigo/:quantidade', (req, res) => {
    res.send(Vender(req.params.codigo, req.params.quantidade));
});
app.put('/produtos/venderVarios', (req, res) => {
    res.send({ Mensagem: VenderVarios(req.body) });
});

app.listen(port, () => {
    console.log(`Api OK, escutando na porta:${port}`)
});