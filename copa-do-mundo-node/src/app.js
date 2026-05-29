import express from "express";

const app = express();

// Indicar para express ler o body com json
app.use(express.json());
import conexao from "../infra/conexao.js";


// Rota principal
app.get("/", (req, res) => {
    res.send("Olá copa do mundo!");
});

// Buscar todas selecões
app.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    });
});

//busncando por Id
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);

    });
})
//criando POST para cadastrar
app.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = "insert into selecoes set?";
    conexao.query(sql, selecao, () => {
        res.json({ mensagem: "Cadastrado com sucesso!" });

    });
});
//deletando dados
app.delete('/selecoes/:id',(req, res) => {
    const id = req.params.id
    const sql = "delete from selecoes where id=?";

    conexao.query(sql, id, () => {
        res.json(["deletado com sucesso"])
    });
});

//atualizando registro
app.put ('/selecoes/:id', (req,res) => {
    const id = req.params.id;
    const selecao = req.body;
    const sql = "update selecoes set ? where id=?";

    conexao.query(sql, [selecao, id], () => {
        res.json({mensagem: "Atualizando com sucesso!" });
    });
});


export default app;