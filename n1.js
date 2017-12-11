const http = require('http')
const optfile = require('./models/optfile')
let i = 0;
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    if(req.url !== '/favicon.ico'){ //清除第二次访问
        // optfile.readFileSync('./views/login.html')
        optfile.readFile('./views/login.html',recall)
        function recall(data) {
            res.write(data)
            res.end() //不写则没有http协议尾
        }
        console.log('主程序执行完毕'+i++);
    }
}).listen(8000)
console.log('server running');