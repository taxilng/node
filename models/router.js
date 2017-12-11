const optfile = require('./optfile')
module.exports = {
    login: (req, res)=>{
        function recall(data) {
            res.write(data)
            res.end() //不写则没有http协议尾
        }
        optfile.readFile('./views/login.html',recall)
    },
    register: (req, res)=>{
        function recall(data) {
            res.write(data)
            res.end() //不写则没有http协议尾
        }
        optfile.readFile('./views/register.html',recall)
    },
    writeFile: (req,res)=>{
        function recall(data) {
            res.write(data)
            res.end() //不写则没有http协议尾
        }
        // optfile.writeFile('./views/one.txt','我随便写的',recall)
        optfile.writeFileSync('./views/one.txt','我随便写的',recall)
    }
}