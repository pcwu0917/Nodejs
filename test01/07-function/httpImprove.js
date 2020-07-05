const http=require("http");

const httpServer=(req,res)=>{
    res.writeHead(200,{"Context-Type":"text/plain"});
    res.write("Hello nodejs");
    res.end();
}

http.createServer(httpServer).listen(8888);
