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
                recall(data.toString())
            }
        })
        console.log('异步方法执行完毕');
    },
    writeFile: (path, data,recall)=>{
        fs.writeFile(path,data, (err)=>{
            if(err){
                throw err;
            }
            console.log('异步文件被保存');
            recall('异步文件被保存')
        })
    },
    writeFileSync: (path, data)=>{
        fs.writeFileSync(path,data)
        console.log('同步文件被保存');
    }

}



// function f1() {
//     var a = 1;
//     return a;
// }
// var b = f1();
// console.log(b);