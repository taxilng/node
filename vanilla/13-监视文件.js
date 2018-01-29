const fs = require('fs')
const cur = 'D:/迅雷下载/01.mp4'
const tar = './views/maopian.mp4'

// fs.watch(cur, (eventType , filename ) => {
//     console.log(eventType);
//     console.log(filename);
//
// })
// fs.readFile(cur, (err, data) => {
//     if (err) throw err
//     fs.writeFile(tar, data, (err) => {
//         if (err) throw err
//         console.log('写入变化');
//     })
// })

// 读文件流
let rs = fs.createReadStream(cur)
let ws = fs.createWriteStream(tar)
let currentCount = 0;
const fileSize = fs.statSync(cur).size;
// rs.pipe(ws)
let othercen = 0;
rs.on('data',(chunk) => {
    currentCount += chunk.length
   let percen = (currentCount / fileSize *100).toFixed(0)
    if(percen > othercen){
        console.log((currentCount / fileSize *100).toFixed(0) + '%');
    }
    othercen = percen;
    // console.log(chunk);
    ws.write(chunk);
})
rs.on('end',() => {
    console.log('文件读取完毕');
    ws.end(() => {
        console.log('文件写入完毕');
    })
})