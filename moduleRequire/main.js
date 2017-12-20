define(function (require, exports, module) {
    console.log("main");
    var addObj = require("add")
    console.log(addObj.add(1, 2));
    var subObj = require("sub")
    console.log(subObj.sub(1, 2));
})

// define(["add","sub"],function (add, sub) {
//     console.log(add.add(1, 2));
//     console.log(sub.sub(1, 2));
// })