"use strict";
var express = require('express');
var router = express.Router();
var upload = require('./fileuploads');

const app = express()
app.use(express.static("./uploader"))

app.listen(8888,() => {
    console.log('正在监听8888');
})
//文件上传服务
router.post('/', upload.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});

module.exports = router;