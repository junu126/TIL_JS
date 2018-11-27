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

이때 entry에서 building된 결과 파일의 이름을 `filename`으로 정의해서 `path`에 해당하는 곳에 생성해주는 것이다.  
그렇기 때문에 path에는 '절대경로'를 통해 설정해주어야한다. 그렇기에 `__dirname`을 사용할 수 있다.  
이때 `__dirname`은 directoryName의 줄임말이다.

```js
module.exports = {
  output : {
    filename : 'bundle.js',
    path : path.join(__dirname, './dist'),
  }
}
```
위의 코드에서 `path.join(__dirname, './dist')`라고 사용했는데 join()메서드는 path의 원소들을 문자열로 나열시키는 메서드이다.  
이 코드를 지나면 key값(path)에는 webpack이 존재하고 있는 현재 폴더로 지정이 되고, 그뒤 './dist'문자열이 나열된다.

즉, `path : C:\Users\junukim\dist`에 지정되는 것 이다. 결과적으로 저 경로에 bundle.js파일이 생성된다.

이후 엔트리에 설정한 app.js는 Utils.js 모듈을 사용한다.

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

# Loader
webpack은 모듈로 모든것을 관리한다. 자바스크립트 파일 뿐아니라, css파일이나, jsx, html파일등.. 다양한 종류의 확장자를 관리해야 한다. 하지만 webpack은 js밖에 건들 수 없다. 그렇기 때문에 자바스크립트 파일이 아닌 파일들을 웹펙이 이해할 수 있도록 바꿔주는 역할을 하는 것이 `loader`이다.

loader는 `test`와 `use`키로 구성된 객체로 설정할 수 있다.

- test에는 로딩하고 싶은 파일을 적는다.
- use에는 적용시킬 로더를 적는다.

Webpack의 로더에는 여러가지가 있다.

    로더의 몇가지 예제
     - style-loader
     - css-loader
     - babel-loader
     ...
이와 같이 여러 로더가 존재한다. 예를 든 3개중 위의 2개는 html파일에 `<style>`태그를 추가해서 css를 넣게 도와주는 로더이고, 마지막 로더는 `Babel`이라고 불리며 ES6이상의 문법들을 ES5로 컴파일시켜서 여러 브라우저에서 돌아갈 수 있는 환경을 조성해준다.

app.js와 Utils.js에서 일부로 ES6문법을 사용했으니, babel을 이용해서 loader를 사용해보도록 하겠다.

```js
module.exports = {
  module : {
    rules : [{
      test : /\.js$/,
      exclude : /node_modules/,
      include : path.join(__dirname, 'src'),
      use : {
        loader : 'babel-loader',
        options : {
          presets : ['env', { module : fasle },
          ],
        }
      }
    }]
  }
}
```
test에는 대부분 정규표현식이 들어가게된다. 여기서는 자바스크립트 파일을 정의해주었다. 그리고 node_module폴더는 패키지 폴더이므로 제외하기 위해 exclude에 넣어준다. (exclude에 넣은 파일/폴더 는 test에서 제외된다.)  
그리고 include는 test 시킬 파일이 존재하는 파일의 path를 설정해준다.

이후 use의 loader에 `babel-loader`를 지정해주어서, 사용할 로더가 babel-loader라는 것을 명시 시킨 후, options를 정의해준다.

options의 preset은 어떻게 변환시킬시 명시한다. 이때 env는 Es2015, Es2016... 등의 변환을 모아둔 것 이다. `module : false`는 바벨 빌드의 결과로부터 사용하지 않는 코드를 삭제해주어서 파일의 크기를 줄여준다.

여기서 options는 바벨의 `.babelrc`파일로 따로 추출할 수 있다.

이후 `\node_modules\.bin\webpack`명령어를 통해 빌드를 하면 Es6문법이 Es5로 바뀐것을 확인할 수 있다.