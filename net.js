/**
 * Created by jiaoshou on 2016/11/6.
 */
"use strict";

const net = require("net");

//监听用的socket
let socket = net.createServer()

socket.on("connection", (connSocket) => {
    //当有连接创建，执行此方法
    //connSocket是负责和客户端收发送数据
    // console.log(connSocket);
    //发送数据

    //接收数据
    // HTTP/1.1 200 OK
    // Connection: keep-alive
    // Content-Type: text/html; charset=UTF-8
    // Date: Thu, 21 Dec 2017 03:57:16 GMT
    // Etag: "c69e400cae8cc1eaf840b09730cec4b81703507b"
    // Server: openresty
    // Vary: User-Agent, Accept-Encoding
    // Content-Length: 58689
    connSocket.on("data", (data) => {
        const html = "hello"
        let response = 'HTTP/1.1 200 OK\n'+
            'Server: my server\n'+
            'Content-Type: text/html; charset=UTF-8\n'+
            'Content-Length: '+ html.length + '\n'+
            '\n'+
            html;
        console.log(data.toString());
        connSocket.write(response);
        connSocket.end()

        //console.log(content); //buffe
    })
})

//socket.listen(8888, "192.168.37.124", function () {
//    console.log("正在监听：8888");
//});

socket.listen(8888,"127.0.0.1", function () {
    console.log("正在监听：8888");
});

//telnet 127.0.0.1 8888