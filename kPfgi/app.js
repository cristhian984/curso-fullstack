const express = require ("express");
const app = express();
const port = 3001;

//criar um função
//rota principal
app.get('/', (req,res) => {
   res.send("Bem Vindo ao meu projeto de alimentos"); 
});

//Executando um servidor

app.listen(port, () => {
console.log (`Servidor rodando em http://localhost:${port}`);
});