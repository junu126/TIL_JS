const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./gzip.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./gzip.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);