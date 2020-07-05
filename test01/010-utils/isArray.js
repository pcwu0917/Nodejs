const utils=require("util");
console.log(utils.isArray([]));
console.log(utils.isArray(new Array()));
console.log(utils.isArray({}));

console.log(utils.isDate(new Date()))
console.log(utils.isDate(Date()));
console.log(utils.isDate({}))