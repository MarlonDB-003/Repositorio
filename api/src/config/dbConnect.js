//const mysql = require('mysql2');
import * as mysql from 'mysql2'
async function conectaDatabase() {

    //criar a conexao com o banco de dados
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'scientia_repositorio'
    });

    connection.connect(function(err) {
        console.log("Conexão com o banco de dados realizada com sucesso!!!");
    });


    //connect(process.env.DB_CONNECTION_STRING);

    return connection.connect;
};

export default conectaDatabase;