const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입력됩니다.', (err) => {
  if (err) {
    console.log(err);
  }
  fs.readFile('./writeme.txt', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.toString());
  });
})