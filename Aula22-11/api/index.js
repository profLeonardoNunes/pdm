const express = require('express');
const pessoas = require('./pessoas.json');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("OK!");
});

app.get('/pessoas', (req, res) => {
    res.send(pessoas);
});

app.listen(port, () => {
    console.log(`App Listening on port ${port}`);
});