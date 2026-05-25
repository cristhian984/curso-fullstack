const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000;
//mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: 18, casado: true },
    { id: 2, nome: "Juliana", idade: 18, casado: false },
    { id: 3, nome: "Doris", idade: 15, casado: false },

];
//criando funções auxiliares
//retornar o objeto por ID
function buscarNomePorID(id) {
    console.log(id);
    return nomes.filter((nome) => nome.id == id);
}





app.get('/', (req, res) => {
    res.send("Roda principal")
});
app.get('/teste', (req, res) => {
    res.send("rota teste")
});

//buscando nome(LIsta =NOme
app.get("/listaNomes", (req, res) => {
    res.send(nomes)
});

//buscando por ID
app.get("/listaNomes/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarNomePorID(index));
});

//criando cadstro

app.post("/listaNomes", (req, res) => {
    nomes.push(req.body)
    res.status(201).send("Nomes cadastrado com sucesso!");


});









app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
});