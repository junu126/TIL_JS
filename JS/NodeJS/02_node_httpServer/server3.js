const http = require('http');

const parseCookies = ( cookie = '' ) => 
  // parseCookies('name=junu;age=18')
  cookie
    .split(';') // [name=junu, age=18]
    .map((v) => v.split('=')) // [[name, junu], [age, 18]]
    .map(([k, ...vs]) => [k, vs.join('=')]) // 배열에 '='이 있을경우 제외
    .reduce((acc, [k, v]) => {  // reduce(() => {}, {}) 인 경우에. 배열을 객체로 변화시킨다.
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  console.log(req.url, cookies);
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
  res.end('Hello Cookie');
}).listen(8082, () => {
  console.log('8082번 포트에서 서버 대기 중 입니다.');
})