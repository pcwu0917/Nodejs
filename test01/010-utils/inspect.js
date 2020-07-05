var utils=require("util");

function Person(){
    this.name="byvoid";
    this.toString=function(){
        return this.name;
    }
}
var obj=new Person();
//utils.inspect(obj)用于将对象转化成字符串
console.log(utils.inspect(obj));
console.log(utils.inspect(obj,true));