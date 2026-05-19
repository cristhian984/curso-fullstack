const express = require("express");
const app = express();
const port = 3000;

//midlewere
app.use(express.static('public'));

//Variavel com os dados
const alimentos = [
   { id: 1, nome: "Feijão", preco: 10 },
   { id: 2, nome: "Carne", preco: 50 },
   { id: 3, nome: "Frutas", preco: 70 },
   { id: 4, nome: "Sopas", preco: 40 }

];

const tiposPratos = [
   { id: 1, nome: "prato executivo", preco: 10 },
   { id: 2, nome: "prato Principal", preco: 50 },
   { id: 3, nome: "Sobremesa", preco: 70 },
];

//Produtos
app.get('/produtos', (req, res) => {
   res.send(alimentos)
});
app.get('/cardapio', (req, res) => {
   res.send(tiposPratos)
});

//criar um função
//rota principal
app.get('/', (req, res) => {
   res.send("Bem Vindo ao meu projeto de alimentos do Kigut e Cia");
});

//rota home

app.get('/home', (req, res) => {
// console.log("olá"__dirname)
res.sendFile(__dirname + '/public/index.html');
});









//Executando um servidor

app.listen(port, () => {
   console.log(`Servidor rodando em http://localhost:${port}`);
});