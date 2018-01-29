"use strict";

const mysql   = require('mysql');
const express = require('express')
const app = express();
//设置要连接的数据库服务器和数据库
//连接池
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'taxilng'
});
app.listen(8000)

app.get('/users', (req, res) => {
//执行sql语句
    pool.query('SELECT * from users', function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
        res.send(results);
    });
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    pool.query('SELECT * from users where uid=?', id, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
})



