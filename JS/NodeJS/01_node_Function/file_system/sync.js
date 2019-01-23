const fs = require('fs');
let data;

console.log('시작');

data = fs.readFileSync('./sync.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./sync.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./sync.txt');
console.log('3번', data.toString());

console.log('끝');