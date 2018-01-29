"use strict";

const express = require('express')
const app = express()

app.get('/*',(req, res,next) => {
    req.aa = '瓜皮'
    next()
})

app.get('/',(req, res) => {
    res.send("hello")
})
app.get('/index',(req, res) => {
    console.log(req.query.id);
    console.log(req.query.name);
    res.send("首页" +req.aa)
})

// app.post('/login',(req, res) => {
//     res.send("login")
// })

app.all('/login',(req, res) => {
   if(req.method.toLowerCase() == 'get'){
       res.send('这是get的login')
   }else if(req.method.toLowerCase() == 'post'){
        res.send('这是post的login')
    }
})

app.get('/:user/:id',(req, res) => {
    console.log(req.params);
    console.log(req.query.user);
    res.send("hello")
})

//通配符
app.get('/*',(req, res) => {
    console.log(req.query.id);
    console.log(req.query.name);
    res.status(404).send("404")
})

app.listen(8888,() => {
    console.log('正在监听8888');
})