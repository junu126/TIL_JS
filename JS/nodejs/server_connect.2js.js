var connect = require('connect');
var http = require('http');

var app = connect();

function about(request, response) {
    console.log("서버에서 about을 요청합니다..")
}

function email(request, response) {
    console.log("서버에서 email을 요청합니다.");
}

app.use('/about', about);
app.use('/email', email);

http.createServer(app).listen(8888)
console.log("서버가 작동합니다.");