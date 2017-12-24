"use strict";

const express = require('express')
const history = require('connect-history-api-fallback');
const app = express()
app.use(history());
app.use(express.static("dist"))

app.listen(8888,() => {
    console.log('正在监听8888');
})