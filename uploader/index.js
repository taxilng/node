"use strict";
var express = require('express');
const app = express(),
    upload = require('./uploader')
app.use(express.static("uploader"))
app.use('/upload', upload)

app.listen(8080,() => {
    console.log('正在监听8080');
})
