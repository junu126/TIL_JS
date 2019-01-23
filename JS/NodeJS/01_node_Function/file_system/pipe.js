const fs = require('fs');

const readStream = fs.createReadStream('./pipe.txt');
const writeStream = fs.createWriteStream('./pipe2.txt');

readStream.pipe(writeStream);