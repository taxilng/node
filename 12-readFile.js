"use strict";
const fs = require("fs");
const iconvLite = require('iconv-lite')
fs.readFile('./views/two.txt',(err, data)=> {
   const str = iconvLite.decode(data,'gb18030')
    console.log(str);
})