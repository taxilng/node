define(function (require, exports, module) {
   console.log('sub');
   return {
        sub: function (a,b) {
            return parseInt(a) -  parseInt(b)
        }
    }
})