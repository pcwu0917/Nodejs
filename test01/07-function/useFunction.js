//定义一个函数
//也可以写为var sayHello=function(vaule){}
function sayHello(value) {
    console.log("Hello "+value);
}
//定义一个函数，参数包括一个值和一个函数
function execute(value,fun){
    fun(value);
}
//执行execute函数，传递值和函数名，注意函数名不能带（）
// 因为带括号表示经sayHello的返回值作为参数
execute("World",sayHello)