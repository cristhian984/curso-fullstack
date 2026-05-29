import mysql from "mysq12";
const conexao = mysql.createConnection({
    host: 'locahost',
    port: '3306',
    user: 'root',
    password:'root',
    database:'copa_mundo'
});

conexao.connect();
export default conexao;