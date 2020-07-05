//引用自己写的模块
const hello=require("./hello");
const car=require('./Car');

hello.world();
car.setColor("yellow");
console.log(car.getColor());
