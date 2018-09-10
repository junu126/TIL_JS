# JSON
JSON은 `JavaScript Object Notation`의 줄임말 입니다.  

JSON은 좀 더 쉽게 데이터를 저장하고, 교환하기 위해 만들어진 텍스트 기반의 데이터 교환 표준 입니다.

JSON은 XML을 대체하기 위해 Javascript를 기반으로 해서 만들어 졌습니다. 또한 텍스트 기반이므로 어떠한 언어에서도 사용할 수 있습니다.

# JSON의 특징
JSON의 특징은 다음과 같습니다.
- 자바스크립트를 확장해서 만들었다.
- 자바스크립트의 객체 표기법을 따른다.
- 사람과 기계가 모두 읽기 쉽게 만들어 졌다.
- 프로그램이 언어와 운영체제에 독립적이다.


# JSON 문법
JSON은 Javascript의 문법 중 하나인 `리터럴`과 `프로퍼티`를 가져와서 사용합니다. 따라서 JSON의 모양이 단순할 수 있는 모양입니다.

여기서 리터럴은 `변수 - 데이터를 저장할 수 있는 메모리 공간`와는 다르게 '해석되는 값' 그 자체를 의미합니다.  
예를 들면 변수로 `let a = 3`이라고 어느 메모리 하나를 차지하는 값 a를 만들었다면 리터럴은 `3`을 의미합니다.

JSON에서는 String을 사용할 때 모두 큰따옴표(`""`)로 감싸야 합니다.

JSON에서는 주석을 거의 사용하지 않습니다.

# JSON의 구조
JSON은 Javascript 객체 표기법에 따른 구조로 구성됩니다.
- JSON 데이터는 이름과 값이 쌍으로 이루어집니다.
- JSON 데이터는 쉼표(,)로 나열됩니다.
- 객체는 중괄호(`{}`)로 둘러싸서 표현합니다.
- 배열은 대괄호(`[]`)로 둘러싸서 표현합니다.

# JSON 스키마
JSON은 아까 언급한 것 처럼 더 쉽게 데이터를 교환하고, 저장하기 위해 만들어진 데이터 교환 표준입니다. 이때 JSON데이터를 전송받는 측 에서는 전송받는 데이터가 적합한 데이터인지 확인할 방법이 필요합니다. 따라서 적합한 JSON 데이터 형식을 기술한 문서를 JSON 스키마 라고 합니다.

# 스키마 검증
JSON 스키마는 다음과 같은 검증을 받습니다.
- 데이터의 타입이 정확한가
- 필수로 받아와야 하는 데이터가 포함되어 있는가
- 데이터가 원하는 범위 안에 있는가

JSON에서는 위와 같은 검증을 여러 키워드를 통해서 직접 명시할 수 있습니다. 키워드는 데이터를 검증하는 `검증 키워드`와 스키마에 대한 정보를 나타내는 `메타 데이터 키워드`로 나뉩니다.

JSON의 대표적인 검증 키워드는 다음과 같습니다.
- `type` : 유요한 데이터의 타입을 명시.
- `properties` : 유요한 데이터 이름과 값의 쌍들을 명시함.
- `required` : 명시한 배열의 모든 요소를 프로퍼티로 가지고 있어야만 유효함.
- `minimum` : 최소값 이상의 숫자만 유효함.
- `maximum` : 최대값 이하의 숫자만 유효함.
- `multipleOf` : 명시된 숫자의 배수만 유효함.
- `maxLength` : 명시한 최대 길이 이하의 문자열만 유효함.
- `minLength` : 명시한 최소 길이 이상의 문자열만 유요함.
- `pattern` : 명시한 정규 표현식에 해당하는 문자열만 유요함.

JSON의 대표적인 메타 데이터 키워드는 다음과 같습니다.
1. title
2. description
3. default

다음은 키워드를 이용한 JSON의 스키마 예제입니다.
```json
{
    "title" : "강아지 스키마",
    "description" : "이 스키마는 강아지에 대한 데이터를 검증하기 위한 스키마임.",
    "type" : "object",
    "properties" : {
        "name" : {"type" : "string"},
        "family" : {"type" : "string"},
        "age" : {"type" : "integer"},
        "weight" : {"type" : "number"},
        "owner" : {
            "type" : "object",
            "properties" : {
                "ownername" : {"type" : "string"},
                "phone" : {"type" : "string"}
            }
        }
    }
}
```

`type` 키워드를 사용하여 유효한 타입을 명시하면, 해당 데이터가 유효한지를 검사할 수 있습니다.

`properties` 키워드를 사용하면, 해당 객체가 가지는 프로퍼티가 유효한지를 검사할 수 있습니다.

# 스키마 숫자 검증
숫자 검증에는 `정수검증`, `숫자검증`, `배수검증`, `범위검증`이 있습니다.

---
## 정수 검증
먼저 정수검증은 숫자 중에서도 해당 데이터가 정수인지 검사해줍니다.
```json
{
    "type" : "integer"
}
```
위의 예제에서는 10, -5, 0 과 같은 수는 통과 하겠지만 4.124나 1.2과 같은 수나, 불리언, "123"과 같은 문자들은 통과하지 못할 것입니다.

---
## 숫자 검증
숫자검증은 해당 데이터가 수 인지 검사해줍니다.
```json
{
    "type" : "number"
}
```
위의 예제에서는 10, -5, 0, 1.24 와 같은 수는 통과 하겠지만 불리언이나 "123"과 같은 문자들은 통과하지 못할 것입니다.

---
## 배수 검증
배수검증은 데이터가 해당 수의 배수인지를 검사해줍니다.

다음은 해당 데이터가 수 이면서, 3의 배수를 찾는 예제입니다.
```json
{
    "type" : "number",
    "multipleOf" : 3
}
```
위의 예제에서는 3의 배수이고, 수인 것만 검증을 통과합니다.
하지만 10이나, 20, "123"과 같은 것 들은 통과하지 못합니다.

---
## 범위 검증
다음과 같은 키워드를 사용하면 해당 숫자의 유효한 범위를 고를 수 있습니다.

1. maximum
2. mimimum
3. exclusiveMaximum
4. exclusiveMinimum

minimum과 maximum 키워드를 사용하면 해당 숫자가 가질 수 있는 최소값과 최대값을 명시할 수있습니다.

exclusiveMaximum과 exclusiveMinimum 키워드는 불리언 값을 명시할 수 있습니다. 만약 exclusiveMaximum 값이 true(`초과, 미만`)이면 maximum값을 포함하지 않은 범위 내에서의 데이터를 보내줍니다.

exclusive 키워드를 따로 명시 하지 않았을 경우에는 기본적으로 false값(`이상, 이하`)을 보내줍니다.

다음예제는 1보다 크고, 10보다 작거나 같은 수 인지 검사하는 예제입니다.
```json
{
    "type" : "number",
    "minimum" : "1",
    "maximum" : "10",
    "exclusiveMinimum" : true
}
```

# 스키마 문자열 검증
숫자 검증에는 `문자열검증`, `문자열길이검증`, `정규표현식검증`이 있습니다.
## 문자열 검증
type값을 string으로 하면 해당 JSON의 데이터가 유니코드인지 검사합니다.

```json
{
    "type" : "string"
}
```
위의 예제에서 1이나, 1.51와 같거나, false과 같은 문자열이 아닌 타입들은 걸러지게 됩니다.

---
## 문자열 길이 검증

문자열 길이 검증 키워드는 0을 포함한 양수만 사용할 수 있습니다.

다음 예제는 1보다 크고, 4보다 작은지를 검사하는 예제입니다.

```json
{
    "type" : "string",
    "minLength" : 1,
    "maxLength" : 4
}
```

---
## 정규표현식 검증
pattern 키워드를 사용하여 해당 문자열이 명시된 [정규표현식](https://github.com/junu126/TIL_JS/blob/master/JSON/RegularExpression.md
)과 동일한지 검사할 수 있습니다.

JSON에서는 Javascript에서 사용할 수있는 모든 정규표현식을 사용할 수 있습니다.

JSON에서 사용되는 정구표현식의 주요 표현은 다음과 같습니다.
- `^a` : 단어의 맨 앞에 위치한 패턴만을 검색함. (ex : 'a'로 시작하는 단어의 'a'만을 검색함.)
- `a$` : 단어의 맨 뒤에 위치한 패턴만을 검색함. (ex : 'a'로 끝나는 단어의 'a'만을 검색함.)
- `a(b)c` : 전체 패턴을 검색한 후에 괄호 안에 명시된 문자열을 저장함. (ex : 'abc'를 검색한 후에 b를 저장함.)
- `[abc]` : 대괄호([]) 안에 명시된 문자를 검색함. (ex : 'abc'를 검색함.)
- `[a-z]` : 대괄호([]) 안에 명시된 범위의 문자를 검색함. (ex : a부터 z까지의 문자를 검색함.)
- `[^abc]` : 대괄호([]) 안에 명시된 문자 이외의 문자를 검색함. (ex : 'abc'를 제외한 문자를 검색함.)
- `[^a-z]` : 대괄호([]) 안에 명시된 범위의 문자를 제외한 문자를 검색함. (ex : a부터 z까지의 문자를 제외한 문자를 검색함.)
- `n+` : 앞의 문자가 1번 이상 나타날 경우를 검색함. {1, }과 같음.
- `n*` : 앞의 문자가 0번 이상 나타날 경우를 검색함. {0, }와 같음.
- `n?` : 앞의 문자가 0번 또는 1번만 나타날 경우를 검색함. {0,1}과 같음.
- `{n}` : 앞의 문자가 정확히 n번 나타날 경우를 검색함. n은 반드시 양의 정수이어야만 함.
- `{m,n}` : 앞의 문자가 최소 m번이상 최대 n번이하로 나타날 경우를 검색함. m과 n은 반드시 양의 정수이어야만 함.

다음은 JSON에서 정규표현식을 이용해서 1개이상의 소문자 알파뱃이 들어있는지 검사하는 예제입니다.
```json
{
    "type" : "string",
    "petern" : "[a-z]+"
}
```

# 스키마 객체 검증
## 프로퍼티 검증
객체의 프로퍼티(property)는 데이터 이름과 값의 쌍으로 구성됩니다.

properties 키워드를 사용하여 해당 객체가 가지는 프로퍼티가 유효한지를 검사할 수 있습니다.

예제
```json
{
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "family": {"type": "string"},
        "age": {"type": "integer"},
        "weight": {"type": "number"}
    }
}
```
 

다음 예제의 JSON 객체는 위의 예제와 같은 검증을 통과할 것입니다.

예제
```json
{
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14
}
```
 

하지만 다음 예제의 JSON 객체는 age와 weight 프로퍼티가 값으로 문자열을 가지므로, 검증을 통과하지 못합니다.

예제
```json
{
    "name": "식빵",
    "family": "웰시코기",
    "age": "1",
    "weight": "2.14"
}
```
## 필수 프로퍼티 검증
required 키워드를 사용하여 해당 객체가 반드시 가지고 있어야 하는 필수 프로퍼티를 명시할 수 있습니다.

만약 필수 프로퍼티가 하나 이상이라면, 배열을 이용하여 각 필수 프로퍼티의 이름을 나열하면 됩니다.

 

다음 예제는 해당 데이터가 객체이면서, 프로퍼티로 name과 family를 가졌는지를 검사하는 예제입니다.

예제
```json
{
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "family": {"type": "string"},
        "age": {"type": "integer"},
        "weight": {"type": "number"}
    },
    "required": ["name", "family"]
}
```

## 프로퍼티의 개수 검증
minProperties와 maxProperties 키워드를 사용하여 해당 객체가 가질 수 있는 프로퍼티 개수의 최솟값과 최댓값을 명시할 수 있습니다.

 

다음 예제는 해당 데이터가 객체이면서, 프로퍼티를 1개나 2개만 가졌는지를 검사하는 예제입니다.

예제
```json
{
    "type": "object",
    "minProperties": 1,
    "maxProperties": 2
}
```

# 기타 검증
## 불리언 검증
type 키워드의 값을 boolean으로 명시하면, 해당 데이터가 불리언인지를 검사해 줍니다.

이때는 데이터의 값이 true와 false인 경우에만 검증을 통과할 수 있습니다.

예제
```json
{
    "type": "boolean"
}
```
 

JSON은 불리언 true와 false 대신에 숫자 1과 0을 대신 사용할 수 없으므로, 위의 예제에서 숫자 1과 0은 통과할 수 없습니다.

## null 검증
type 키워드의 값을 null로 명시하면, 해당 데이터가 null인지를 검사해 줍니다.

예제
```json
{
    "type": "null"
}
```
 

위의 예제에서 null 이외의 모든 값은 검증을 통과하지 못합니다.

## 열거형 데이터 검증
enum 키워드를 사용하여 해당 데이터가 명시된 배열에 속한 값인지를 검사할 수 있습니다.

유효한 enum 값들은 배열을 사용하여 명시하며, 중복 값을 가질 수는 없습니다.

예제
```json
{
    "type": "string",
    "enum": ["웰시코기", "포메라니안", "푸들"]
}
```
 
위의 예제에서 문자열인 "웰시코기", "포메라니안", "푸들" 이외의 모든 값은 검증을 통과할 수 없습니다.

# 스키마 결합
## 스키마 결합
JSON 스키마에서는 다음 키워드를 사용하여 여러 JSON 스키마를 결합할 수 있습니다.

 

1. allOf

2. anyOf

3. oneOf

## allOf
allOf 키워드를 사용하여 명시된 배열에 나열된 모든 JSON 스키마를 한 번에 검사할 수 있습니다.

이때 배열에 나열된 스키마에 대한 검증을 모두 통과해야 합니다.

 

다음 예제는 해당 문자열 데이터의 길이가 3 이상이고 5 이하인지를 검사하는 예제입니다.

예제
```json
{
    "allOf": [
        {"minLength": 3},
        {"maxLength": 5}
    ]
}
```
 

위의 예제에서는 해당 문자열 데이터의 길이가 최소 3 이상인지를 검사하는 스키마와 해당 문자열 데이터의 길이가 최대 5 이하인지를 검사하는 스키마가 있습니다.

이때 allOf 키워드를 사용하여 두 스키마를 결합하므로, 두 스키마의 검증을 모두 통과하는 데이터만이 검증을 통과할 것입니다.

 

따라서 "abc", "1234"와 같이 문자열의 길이가 3 이상이고 5 이하인 문자열만이 검증을 통과합니다.

## anyOf
anyOf 키워드를 사용하여 명시된 배열에 나열된 모든 JSON 스키마를 한 번에 검사할 수 있습니다.

이때 배열에 나열된 하나 이상의 스키마에 대한 검증을 통과해야 합니다.

 

다음 예제는 해당 데이터가 문자열이나 숫자인지를 검사하는 예제입니다.

예제
```json
{
    "anyOf": [
        {"type": "string"},
        {"type": "number"}
    ]
}
```

 

위의 예제에서는 해당 데이터가 문자열인지를 검사하는 스키마와 숫자인지를 검사하는 스키마가 결합하여 있습니다.

여기에 anyOf 키워드를 사용했으므로, 두 스키마 중 어느 하나의 검증을 통과하는 데이터만이 검증을 통과할 것입니다.

 

따라서 문자열과 숫자만이 검증을 통과합니다.

## oneOf
oneOf 키워드를 사용하여 명시된 배열에 나열된 모든 JSON 스키마를 한 번에 검사할 수 있습니다.

이때 배열에 나열된 오직 하나의 스키마에 대한 검증만을 통과해야 합니다.

 

다음 예제는 해당 데이터가 숫자이면서 3의 배수이거나, 아니면 숫자이면서 4의 배수인지를 검사하는 예제입니다.

예제
```json
{
    "oneOf": [
        { "type": "number", "multipleOf": 3 },
        { "type": "number", "multipleOf": 4 }
    ]
}
```

 

위의 예제에서는 해당 데이터가 숫자이면서 3의 배수인지를 검사하는 스키마와 숫자이면서 4의 배수인지를 검사하는 스키마가 결합하여 있습니다.

여기에 oneOf 키워드를 사용했으므로, 두 스키마 중 오직 하나의 검증만을 통과하는 데이터만이 검증을 통과할 것입니다.

 

따라서 3, 6, 9와 같은 3의 배수와 4, 8, 16과 같은 4의 배수는 검증을 통과합니다.

하지만 12, 24, 36과 같은 3과 4의 공배수는 검증을 통과할 수 없습니다.

## not
not 키워드를 사용하여 명시된 JSON 스키마를 만족하지 않는 데이터만을 검사할 수 있습니다.

 

다음 예제는 해당 데이터가 문자가 아닌지를 검사하는 예제입니다.

예제
```json
{
    "not": {
        "type": "string"
    }
}
```

 

위의 예제는 해당 데이터가 문자열이 아닌 데이터만이 검증을 통과합니다.

즉, 모든 문자열은 검증을 통과하지 못합니다.

# 자바스크립트와 JSON
JSON은 자바스크립트를 기반으로 한 텍스트 기반의 데이터 교환 표쥰 입니다. 따라서 Javascript를 사용하는 웹 환경에서 사용하는 것이 유리합니다.

자바스크립트에서 JSON을 사용하는 방법은 간단합니다. Javascript에서는 JSON 데이터 처리를 위한 메소드를 지원합니다.

1. JSON.stringify()
2. JSON.parse()
3. JSON.toJSON()

## JSON.stringify() 메소드
인수로 전달받은 자바스크립트 객체를 문자열로 전환해서 반환 합니다.

> 문법 `JSON.stringify(value)`  

value에는 변환할 자바스크립트 객체를 전달합니다.

이 메소드는 UTF-16으로 인코딩된 JSON 형식의 문자열을 반환합니다.

예제
```js
var dog = {name: "식빵", family: "웰시코기", age: 1, weight: 2.14}; // 자바스크립트 객체

var data = JSON.stringify(dog); // 자바스크립트 객체를 문자열로 변환함.

document.getElementById("json").innerHTML = data;
```

## JSON.parse() 메소드
stringify메소드와는 반대로 문자열을 객체로 반환한다.

> 문법 `JSON.parse(text)`

text에는 변환할 문자열을 전달합니다.

이때 해당 문자열은 반드시 유효한 JSON 형식의 문자열이어야 합니다.

만약 JSON 형식에 맞지 않는 문자열을 전달하면, 자바스크립트는 오류를 발생시킬 것입니다.

예제
```js
var data = '{"name": "식빵", "family": "웰시코기", "age": 1, "weight": 2.14}'; // JSON 형식의 문자열

var dog = JSON.parse(data); // JSON 형식의 문자열을 자바스크립트 객체로 변환함.

document.getElementById("json").innerHTML = dog + "<br>";

document.getElementById("json").innerHTML += dog.name + ", " + dog.family;
```

## JOSN.toJSON()메소드
자바스크립트 Data 객체의 **데이터**를 JSON형식의 문자열로 반환.

따라서 이 메소드는 Date.prototype 객체에서만 사용할 수 있습니다.

toJSON() 메소드는 접미사 Z로 식별되는 UTC 표준 시간대의 날짜를 ISO 8601 형식의 문자열로 반환합니다.

따라서 이 문자열은 언제나 24개나 27개의 문자로 이루어지며, 다음과 같은 형식을 따릅니다.

> 문법  
    >>`YYYY-MM-DDTHH:mm:ss.sssZ`  
    또는  
    `±YYYYYY-MM-DDTHH:mm:ss.sssZ`

예제
```js
var date = new Date();   // 자바스크립트 Date 객체

var str = date.toJSON(); // Date 객체를 JSON 형식의 문자열로 변환함.

document.getElementById("json").innerHTML = date + "<br>";

document.getElementById("json").innerHTML += str;
```

# +PHP
php... 싫어요 ㅜㅜㅜㅜ