const fs = require('fs');
const qs = require('querystring');
const url = require('url');
const http = require('http');

const parseCookies = ( cookie = '' ) =>
  cookie
    .split(';')
    .map((v) => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {}

http.createServer((req, res) => {
  const cookie = parseCookies(req.headers.cookie);
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date;
    expires.setMinutes(expires.getMinutes() + 1);
    const randomInt = +new Date();
    session[randomInt] = {
      name,
      expires,
    };
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; path=/`,
    });
    res.end();
  } else if (cookie.session && session[cookie.session].expires > new Date()) {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    res.end(`${session[cookie.session].name}님 안녕하세요`);
  } else {
    fs.readFile('./server4.html', (err, data) => {
      if (err) {
        throw err;
      }

      res.end(data);
    })
  }
}).listen(8084, () => {
  console.log('8084번 포트에서 서버 대기 중입니다!');
});