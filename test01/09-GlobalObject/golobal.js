//global全局对象，可以直接在文件中写他的方法或属性
//1、__filename：当前文件的绝对路径
console.log(__filename);
//2、__dirname：当前文件所在文件夹的绝对路径
console.log(__dirname);

let sayHello=()=>{console.log("Hello world")};

//3、setTimeout(cb,ms)
// 在timeout后，执行sayHello方法，只执行一次
setTimeout(sayHello,1000);

//4、setInterval(cb,ms)
//每隔timeout后调用一次cb()
setInterval(sayHello,1000);

//5、clearTimeout(t)
//停止一个之前创建的计时器
clearTimeout(5000);

//6、console,控制台输出
//console.log[info,err,warn,dir]
console.error("console.err()")
console.warn("console.warn()")