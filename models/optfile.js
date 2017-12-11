const fs = require('fs')
module.exports = {
    readFileSync: (path)=>{
        const data = fs.readFileSync(path,'utf-8')
        console.log(data);
        console.log('同步方法执行完毕');
    },
    readFile: (path, recall)=>{
        fs.readFile(path,(err, data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data.toString());
                recall(data)
            }
        })
        console.log('异步方法执行完毕');
    }
}