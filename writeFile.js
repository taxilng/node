const http = require('http')
const url = require('url')
const router = require('./models/router')
let i = 0;
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    if(req.url !== '/favicon.ico'){ //清除第二次访问
        const pathname = url.parse(req.url).pathname.replace(/\//,'')
        console.log(pathname);
        router[pathname](req, res)
        console.log('主程序执行完毕'+i++);
    }
}).listen(8000)
console.log('server running');