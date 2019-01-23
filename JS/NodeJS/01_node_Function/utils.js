const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecate되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

const randomBytestPromise = util.promisify(crypto.randomBytes);
randomBytestPromise(64)
  .then((result) => {
    console.log(result.toString('base64'));
  }).catch((err) => {
    console.error(err);
  });