const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// 클라이언트에 get요청을 보냄.
// get(라우팅, 콜백)
app.get('/', (req, res) => {
  const message = 'Hello World!';
  res.render('index', {message});
});

// 포트를 수신할 주소를 정함
// listen(포트, 콜백)
app.listen(3001, () => {
  console.log('SERVER : Express app listining on port 3001');
});
