const http = require('http')
const optfile = require('./models/optfile')
let i = 0;
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/jpeg;'})
    if (req.url !== '/favicon.ico') { //清除第二次访问
        optfile.readImg('./images/4.jpg', res)
        console.log('主程序执行完毕' + i++);
    }
}).listen(8000)
console.log('server running');