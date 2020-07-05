var events=require("events");
var eventEmitter=new events.EventEmitter();

var connectHandler=function(){
    console.log("连接成功");
    eventEmitter.emit("dataReceived");
}

eventEmitter.on("connection",connectHandler);
eventEmitter.on("dataReceived",function(){
    console.log("数据接收成功");
})
eventEmitter.emit("connection");
console.log("程序执行结束")