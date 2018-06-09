var app = require('express')();
var http = require('http').Server(app);     // express기반으로 http서버를 만든다.
var io = require('socket.io')(http);        // http객체에 socket.io서버를 등록한다. (http요청이 들어왔을때 실행하기 위해 받음)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){       // on(connection)은 연결이 되었을때 실행.
    socket.on('chat message', function(msg){
// connection을 하면 socket 클라이언트를 할 때마다 생성.
// 하나의 소켓은 하나의 클라이언트와 연결.
      io.emit('chat message', msg); // 모두에게 value를 쏨.
    });
  });   
// io = server || socket = 클라이언트. || 클라이언트 = J쿼리 같은거(?)
http.listen(3000, function() {
    console.log('listening on *: 3000');
});