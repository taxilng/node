const optfile = require('./optfile')
function getRecall(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    function recall(data) {
        res.write(data)
        res.end() //不写则没有http协议尾
    }
    return recall
}
module.exports = {
    login: (req, res)=>{
       const recall = getRecall(req, res)
        optfile.readFile('./views/login.html',recall)
    },
    register: (req, res)=>{
        const recall = getRecall(req, res)
        optfile.readFile('./views/register.html',recall)
    },
    writeFile: (req,res)=>{
        function recall(data) {
            res.write(data)
            res.end() //不写则没有http协议尾
        }
        // optfile.writeFile('./views/one.txt','我随便写的',recall)
        optfile.writeFileSync('./views/one.txt','我随便写的',recall)
    },
    showImg:(req, res)=>{
        res.writeHead(200, {'Content-Type': 'image/jpeg;'})
        optfile.readImg('./images/4.jpg',res)
    }
}