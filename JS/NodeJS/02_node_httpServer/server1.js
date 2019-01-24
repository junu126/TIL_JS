const http = require('http');

http.createServer((req, res) => {
  res.write('<h1>Hello Node!</h1>');  // [응답] 클라이언트로 html을 보냄.
  res.end('<p>Hello Server!</p>');    // [응답] 클라이언트로 html을 보내고 응답을 종료. -> 이후의 응답은 작동 안함.
  res.write('<div>나는 빡빡이.<div/>')  // 응답안함.
}).listen(8080, () => {
  console.log('8080번 포트에서 서버 대기 중입니다!');
});