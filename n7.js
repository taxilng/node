const async = require('async')
function f1() {
    let i = 0
    const timer = setInterval(() => {
        console.log("aaa" + new Date());
        i++;
        if (i == 3) {
            clearInterval(timer)
        }
    }, 1000)
    console.log("f1执行完毕");
}
function f2() {
    let i = 0
    const timer = setInterval(() => {
        console.log("bbb" + new Date());
        i++;
        if (i == 3) {
            clearInterval(timer)
        }
    }, 1000)
    console.log("f2执行完毕");
}

// f1()
// f2()
function exec() {
    // async.series({//串行无关联
    // async.parallel({ //并行
    async.waterfall([ //串行有关联
         (done)=> {
            let i = 0
            const timer = setInterval(() => {
                console.log("one" + new Date());
                i++;
                if (i == 3) {
                    clearInterval(timer)
                    done(null,'one完毕')
                }
            }, 1000)
        },
        (preValue,done)=>{
            let i = 0
            const timer = setInterval(() => {
                console.log("two"+preValue + new Date());
                i++;
                if (i == 3) {
                    clearInterval(timer)
                    done(null,preValue+'two完毕')
                }
            }, 1000)
        }],(err,rs)=> {
            console.log(err);
            console.log(rs);
        }
)
}
exec()