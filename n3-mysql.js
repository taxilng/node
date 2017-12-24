"use strict";

const mysql   = require('mysql');
const express = require('express')
const app = express();
//设置要连接的数据库服务器和数据库
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'taxilng'
});
app.listen(8888)
app.get('/users', (req, res) => {
    connection.connect();
//执行sql语句
    connection.query('SELECT * from users', function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
        res.send(results);
    });
    connection.end();
})

app.get('/users/:id', (req, res) => {
    connection.connect();
    const id = req.params.id
    connection.query('SELECT * from users where uid=?', id, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
    connection.end();
})

