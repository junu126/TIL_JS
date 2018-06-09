var http = require('http');
var fs = require('fs');

function send404Reponse(response) {
    response.writeHead(404, {"Content-Type" : "text/plain"});
    response.write("404 Error : Oops!!!!");
    response.end();
}

// 사용자 요구의 응답 처리하기.
function onRequest(request, response) {

    if(request.method == 'GET' && request.url == '/')
    {
        response.writeHead(200,{"Content-Type" : "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else 
    {
        send404Reponse(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("서버가 돕니다.");