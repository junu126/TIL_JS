let http = require('http');
let fs = require('fs');

function response404Error(response) {
    response.writeHead(404, {"Content-Type" : "text/text"});
    response.write("404Error : Oops Error!!");
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
console.log("서버가 돕니다.");