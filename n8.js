// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());//执行node所在的文件夹
// console.log(process.argv);//执行node所在的文件夹
// console.log(process.env.XX);//开发环境，生产环境
// console.log(process.env.XXX);
// if(process.env.XXX.trim() == 'dev'){
//     console.log("开发环境"); //set XXX=dev&& node n8.js 删除所有的空格
// }else{
//     console.log("生产环境");
// }

//输出
// process.stdout.write("aaa")

//输入
process.stdin.on('readable',function () {
    var data = process.stdin.read();
    if(!data){
        process.stdout.write('请输入内容：')
        return
    }else {
        process.stdout.write('你输入的内容：' + data)
    }
})