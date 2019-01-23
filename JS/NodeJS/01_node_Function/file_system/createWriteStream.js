const fs = require('fs');

const writeStream = fs.createWriteStream('./createWriteStream.txt');

writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다.');

// end명령은 finish Event를 발생시킴.
writeStream.end();