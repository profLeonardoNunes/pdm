const express = require('express');
const pessoas = require('./pessoas.json');
const cors = require('cors');
const { response } = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());



app.get('/pessoas', (req, res) => {
    res.send(pessoas);
});
app.get('/', (req, res) => {
    res.send({ Mensagem: 'Aplicação OK' });
});

app.listen(port, () => {
    console.log(`Aplicativo rodando na porta ${port}`);

});