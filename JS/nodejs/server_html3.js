var http = require('http');
var fs = require('fs');

function response404Error(response) {
    response.writeHead(404, {"Content-Type" : "text/plain"});
    response.write("404 Error : Oops!!!");
    response.end();
}

function onRequest(request, response) {
    if(request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        response404Error(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("서버가 작동합니다.");