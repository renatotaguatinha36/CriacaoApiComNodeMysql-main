const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbapicarros'
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao dbapicarros`)
});

module.exports = connection;

