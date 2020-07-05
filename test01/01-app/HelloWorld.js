var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello World");
}).listen(8888);
console.log('server running at http://localhost:8888/')