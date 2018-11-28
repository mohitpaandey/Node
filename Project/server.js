var http =require('http');
var fs =require('fs');
 http.createServer(function(req,res){
fs.readFile("./Web./index.html","UTF-8",function(err,html){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(html)
});
 }).listen(3000);
 console.log("done");