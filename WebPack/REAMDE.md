# 웹펙

자바스크립트 코드가 길어지면서 하나의 파일에 자바스크립트의 모든 파일을 관리하기 어려워졌다. 그렇다고 파일을 여러개로 나눠서 브라우저에서 로딩하기에는 네트워크비용이 많이 들게된다. 또한 http요청이 비효율적이기 때문에 브라우저에서 로딩하는 요청을 줄이기 위하여 웹펙을 사용한다.

# 설치 및 개발환경 구성
```js
// yatn
yarn add -g webpack webpack-cil && yarn add -D webpack webpack-cli

// npm
npm i - g webpack webpack-cil && npm i -D webpack webpack-cli
```
위의 명령어를 터미널에 입력하게 되면 webpack이 설치가 되고, 개발환경으로 설정된다. yarn을 기호하거나 npm을 기호하는 것은 선택이다.

```js
// yarn
yarn add -g -D babel-loader @babel/core @babel/preset-env @babel/react @babel/preset-stage-0

// npm
npm i -g -D babel-loader @babel/core @babel/preset-env @babel/react @babel/preset-stage-0
```
위의 명령얼르 터미널에 입력하게 되면 ES6이상의 문법들을 사용하면 호환하지 않는 브라우저가 있기 마련이다. 이때 이런 문법들을 ES5로 변환시켜 컴파일 해주는 `babel`을 설치할 수 있다. 나는 react를 사용하기 때문에 @babel/react를 해주는 것 이다. 이것을 해주면 JSX같은 문법을 컴파일 할 수 있게된다.

# webpack.config.js
파일명이 webpack.config.js여야 웹팩이 바로 인식한다. 만약 웹팩이 인식하는 파일명을 다르게 하고 싶다면, 터미널에서 webpack--config webpack.config.prod.js와 같이 `--config`플래그를 사용해 경로를 지정해 주면 된다. 위와 같이 터미널에 입력하고 나면 webpack.config.prod.js파일을 웹팩이 인식하게 된다.
``` js
import webpack from 'webpack';

module.exports = {
  ...
}
```
위와 같이 작성한다.

# Entry
웹팩의 모든 것은 모듈로 이루어져 있다. 다시말해 html에서 script를 통해 js를 불러오는 방법이 아닌, import, require를 사용해서 웹팩을 이용할 수 있다는 말이된다. 

웹팩에서 Entry는 필요한 모듈을 로딩하고, 하나의 파일로 묶는다. 즉 웹팩이 파일을 읽어 들이기 시작하는 부분이다.

```js
module.exports = {
  entry : {
    app : './src/app.js',
  },
} 
```
html에서 사용할 자바스크립트의 시작점은 src/app.js 코드이다. entry 키에 시작점 경로를 지정하는 방법이다. 이때 app은 app.js로 결과물이 나오게 된다.

# OutPut
엔트리에 설정한 자바스크립트 파일을 시작으로 의존되어 있는 모든 모듈을 하나로 묶는다. 번들된 결과물을 처리할 위치는 output에 기록된다. 즉 결과물이 어떻게 나올지 설정한다.

```js
module.exports = {
  output : {
    filename : 'bundle.js',
    path : './dist'
  },
}
```
dist 폴더의 bundle.js 파일로 결과를 저장한다.  
html 파일에서는 번들링된 이 파일을 로딩하게끔 한다.

엔트리에 설정한 app.js는 Utils.js 모듈을 사용한다.

### src/app.js : 
```js
  import Utils from './Utils';

  Utils.log('OMG so Hard!!')
```
그렇기에 Utils.js모듈을 정의해준다.

### src/Utils.js :
``` js
export default class Utils {
  static log(masage) {
    console.log('[Log] : ' + masage);
  }
}
```