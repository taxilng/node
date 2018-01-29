const querystring = require('querystring')
const queryS = 'id=1&name=zs'

console.log(querystring.parse(queryS));
const s =querystring.parse(queryS);

console.log(querystring.stringify(s));
console.log(querystring.escape(queryS));
console.log(module.paths);