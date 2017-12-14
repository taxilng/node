define(function (require, exports, module) {
    var $ = require('jquery')
    console.log($);
    var obj = require('./power')
    module.exports = {
        add: function (a,b) {
            return parseInt(a) +  parseInt(b)
        },
        sub: function (a,b) {
            return parseInt(a) -  parseInt(b)
        },
        three: function (a) {
           return obj.power(a) * parseInt(a)
        }
    }
})