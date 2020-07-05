
function execute(value,someFunction){
    someFunction(value);
}
//使用匿名函数作为形参
execute("world",(value)=>{console.log("Hello "+value)})

