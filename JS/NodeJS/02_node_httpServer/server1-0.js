const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
  res.write('<div>나는 빡빡이.<div/>');
});
server.listen(8080);

server.on('listening', () => {
  console.log('8080번 포트에서 대기 중 입니다.');
});

server.on('error', (error) => {
  console.error(error)
})