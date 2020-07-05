const utils=require("util");

function Base() {
    this.name="base";
    this.base=1991;
    this.sayHello=function(){
        console.log("Hello "+this.name);
    }
}
Base.prototype.showName=function(){
    console.log(this.name);
}
function Sub() {
    this.name="sub"
}
//定义继承，但是远远没有prototype好用
//utils.inherits(Sub,Base);
Sub.prototype=new Base();

let obj1=new Base();
obj1.sayHello();
obj1.showName();
console.log(obj1);

let obj2=new Sub();
obj2.sayHello();
obj2.showName();
console.log(obj2);