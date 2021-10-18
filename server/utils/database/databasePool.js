const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit : 20,
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: "gerenciador_de_caixa"
})

exports.pool = pool