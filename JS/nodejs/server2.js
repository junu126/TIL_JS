var http = require('http');

function onRequest(request, response) {
    console.log("사용자가 요청합니다." + request.url);
    response.writeHead(200, { "Context-Type" : "text/plain" });
    response.write("This is my Server");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("서버가 돕니다.");