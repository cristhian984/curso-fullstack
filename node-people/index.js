const express = require ("express");
const app = express();


const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
});

app.get('/', (req,res) => {
    res.send("Roda principal")
}); 
app.get('/teste', (req,res) => {
    res.send("rota teste")
})