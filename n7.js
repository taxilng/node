const http = require('http')
const url = require('url')
const router = require('./models/router')
const exception = require('./models/exception')
let i = 0;
http.createServer((req, res)=>{
    if(req.url !== '/favicon.ico'){ //清除第二次访问
        const pathname = url.parse(req.url).pathname.replace(/\//,'')
        console.log(pathname);
        try{
            router[pathname](req, res)
           // const data = exception.expfun(1)
           //  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
           //  res.write('成功'+data)
           //  res.end()
        }catch (err){
            console.log('报错' + err);
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
            res.write('报错' + err)
            res.end()
        }
        console.log('主程序执行完毕'+i++);
    }
}).listen(8000)
console.log('server running');