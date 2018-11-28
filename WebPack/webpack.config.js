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

  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        include : path.join(__dirname, './src'),
        use : [{
          loader : 'babel-loader',
          options : {
            presets : [ '@babel/preset-env' ],
          },
        }],
      },
  
    // 다른 loader를 설정할 때 배열의 다음 인덱스에 넣어줌.
    ],
  },
}