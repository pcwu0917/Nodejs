var fs=require("fs");

var readStream=fs.createReadStream("../resources/input.txt");
var writeStream=fs.createWriteStream("../resources/pipeoutput.txt");
readStream.pipe(writeStream,()=>{
    console.log("管道流执行完毕")
});
console.log("程序执行完毕")