var fs=require("fs");
var data="百度 www.baidu.com";

var writeStream=fs.createWriteStream("../resources/output.txt");

writeStream.write(data,"utf-8");
writeStream.end();
writeStream.on("finish",()=>{
    console.log("写入完成");
})
writeStream.on("error",(err)=>{
    console.log(err.stack);
})
console.log("程序执行完毕")