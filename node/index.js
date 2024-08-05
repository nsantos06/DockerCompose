const express = require('express')
const app = express()
const port = 3555
const config = {
    host:"db",
    user:"root",
    password:"some_password",
    database:"nodedb"
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Nicollas')`
connection.query(sql)
connection.end()

app.get('/', (req,res) =>{
    res.send('<h1>Full Cycle</h1>')  
})

app.listen(port, ()=> {
    console.log('Rodando na porta' + port)
})