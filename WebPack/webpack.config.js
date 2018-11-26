// webpack에서는 import, from을 사용할 수 없고 ES5문법인 require로 모듈을 불러와야한다.
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode : 'development',
  
  entry : {
    app : './src/app.js',
  },

  output : {
    filename : 'bundle.js',
    path : path.join(__dirname, './dist'),
  },

  
}