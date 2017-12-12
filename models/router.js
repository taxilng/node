const optfile = require('./optfile')
const url = require('url')
const querystring = require('querystring')//post方式必须导入
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
        //get方式接收参数
       /* const rdata = url.parse(req.url,true).query;
        if(rdata['email']!=undefined){
            console.log(rdata['email']);
            console.log(rdata['pwd']);
            console.log(rdata);
        } */


       //post方式接收参数
        let post = '';
        req.on('data',(chunk)=>{
            post += chunk;
        })//异步
        req.on('end',()=>{
            post = querystring.parse(post)
            // console.log('收到邮箱参数:'+post['email'] +'\n')
            // console.log('收到密码参数:'+post['pwd'] +'\n')
            const arr = ['email','pwd']
            function recall(data) {
               let dataStr = data.toString();
                arr.map((item)=>{
                    const exec = new RegExp('{'+ item +'}','g')
                    dataStr = dataStr.replace(exec,post[item])
                })
                res.write(dataStr)
                res.end() //不写则没有http协议尾
            }
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
            optfile.readFile('./views/login.html',recall)
        })



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