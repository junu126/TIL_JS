# 정규 표현식

정규표현식은 문자열에 나타나는 특정 문자 조합과 대응시키기위해 사용되는 패턴입니다.

자바스크립트에서, 정규표현식 또한 하나의 객체입니다. 이 패턴들은 RegExp의 Exec 메소드와 test 메소드, 그리고 String의 match메서드,   replace메소드, serch메서드, split 메소드와 함께 사용됩니다.

정규표현식이 조금 복잡하고 혼잡하다보니까 정규표현식을 알려주는 사이트가 등장했습니다.
[정규표현식](https://regexr.com/)을 간단히 사용할 수 있답니다 ㅎㅎ
# 사용 이유
프로그램 이란 자체도 일일이 손으로 계산하고 처리하던 것을 생산성 과 효율성을 위해 만들어진 것처럼
프로그램 내에서도 생산성과 효율성은 배제 할수 없는 부분 이라는 것입니다.

그중에 이 정규표현식은 특히나 더 큰 생산성과 효율성을 제시하기 때문에, 반드시 알고 있어야 할 프로그램적인 소양 같은 것이라고 저는 생각합니다.

# 만드는 방법
정규식을 만드는 방법에는 리터럴을 사용하는 방법과, RegExp 객체의 생성자 함수를 호출하는 방법으로 총 2가지가 있습니다. 

리터럴을 이용하는 방법은 슬래쉬(`/`)로 감싸는 패턴 입니다.  
> `var re = /ab+c/;`  

정규식 리터럴은 스크립트가 불러와 질때 컴파일 됩니다. 만약 정규식이 상수라면 리터럴 방식을 사용하는 것이 효율을 상승시킬 수 있습니다.

다음 방법은 RegExp 객체의 생성자 함수를 호출하는 방법입니다.
> `var re = new RegExp("ab+c");`

생성자 함수를 사용하면 실행 시점에서 컴파일 됩니다. 정규식의 패턴이 변하는 경우와 사용자의 입력과 같은 다른 출처로부터 패턴을 가져와야 하는 경우에 생성자 함수를 이용하는 것이 좋습니다.

# 정규식 패턴
정규식 패턴은 `/abc/` 같이 단순 문자로 구성될 수도있고, `/ab*c/` 또는 `/Chapter(\d+)\.\d*/`와 같이 단순문자와 특수문자의 조합으로 사용될 수 도있습니다.

---
## 단순 패턴
단순 패턴은 문자열을 있는 그대로 대응시키고자 할 때 사용합니다. 예를 들어 `/abc/`라는 패턴은 문자열에서 `abc`라는 문자들이 모두 함께 순서대로 나타나야 합니다. 

예를 들면 "Hi, do you know your `abc`'s?" 와 "The latest airplane designs evolved from sl`abc`raft."와 같은 예제에서 `abc`가 나왔던 부분문자열 abc에 대응될 것 입니다. 하지만 "Gr`ab c`rab"이라는 문자열에서 `ab c`라는 부분 문자열을 포함하고 있지만 정확하게 포함되지 않았기 때문에 대응되지 않습니다.

---
## 특수 문자 사용
'있는 그대로의 대응'을 넘어서 그 이상의 대응을 필요로 할 때, 패턴에 특수한 문자를 포함시킵니다. 예를 들어 `/ab*c/` 패턴은 'a'문자 뒤에 0개 이상의 'b'문자가 나타나고 바로 뒤에 'c'문자가 나타나는 문자 조합에 대응됩니다. 문자열 "cbbabbbbcdebc"에서 위의 패턴은 부분 문자열 'abbbbc'와 대응합니다.

> `*`문자는 바로 앞의 문자가 0개 이상이라는 것을 의미합니다.
---
## 정규식에서의 특수 문자
|<center>Character</center>|<center>Meaning</center>|
|:--------:|:--------:|
|**`\`** | <center>특수문자가 아닌 문자 앞에서 사용된 백슬래시는 '해당 문자는 특별하고, 문자 그대로 해석되면 안된다.'는 사실을 가리킵니다. 예를 들어 `\가 없는 b`와 `\b`는 전혀 다른 문자가됩니다. 일반 소문자`b`는 다른 문자들과 대응하는 반면, `\b`는 어떠한 문자와도 대응되지 않습니다.<br><br>또한  특수문자 앞에 위치한 백슬래시는 '다음에 나오는 문자는 특별하지 않고, 문자 그대로 해석되어야 한다'는 사실을 가리킵니다. 예를 들어 패턴 `/a*/`에서 `*`은 0개 이상의 a문자가 등장함을 나타냅니다. 하지만 `/a\*/`에서는 문자 `a*`를 나타냅니다.<br><br>RegExp 표기법을 사용하면서 \ 자체를 사용하고 싶다면 `\\`이렇게 사용해야 합니다. 예를 들어 `/a\*/`와 같은 패턴을 사용하고 싶다면 RegExp 표기법에 따라서 `new RegExp('a\\*')`와 같이 사용해야 합니다. </center> |
|**`^`** | <center>입력의 시작부분에 대응됩니다. 만약 다중행 플래그가 참으로 설정되어있다면, 줄 바꿈 다음 부분과도 대응됩니다.<br><br>예를 들어 `/^A/`는 "an A"의 A와는 대응되지 않습니다. 그러나 "An E"와는 대응됩니다.</center> |
|**`$`** | <center>입력의 끝부분과 대응됩니다. 만약 다중행 플래그가 참으로 설정되어있다면, 줄 바꿈 문자의 바로 앞 부분과도 대응됩니다.<br><br> 예를들어 `/t$/`는 "eater"의 't'에는 대응되지 않습니다, 그러나 "eat"과는 대응됩니다.</center> |
|**`*`** | <center>앞의 표현식이 0회 이상 반복되는 부분과 대응됩니다. {0, } 와 같은 의미입니다. <br><br> 예를 들어 `/bo*/`는 "A ghost booooed" 의 'boooo' 와 대응되고, "A bird warbled" 의 'b'에 대응되지만 "A goat grunted" 내의 어느 부분과도 대응되지 않습니다.</center> |
|**`+`** | <center>앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응됩니다.<br><br> 예를 들어 `/a+/`는 "candy"의 a에 대응되고, "caaaaaaandy"의 모든 a에 대응됩니다. 하지만 "cndy"에선 대응되지 않습니다.</center> |
|**`?`** | <center>앞의 표현식이 0 또는 1회 이상 등장하는 부분과 대응됩니다. {0, 1 } 과 같은 의미입니다.<br><br>예를 들어 `/e?le?/`는 "angel"의 el과 대응하고 "angle"의 le에 대응 합니다. 또한 "also"의 l애 대응됩니다. <br><br> 만약 수량자(*, +, ?, {} ) 바로 뒤에 사용하면, 기본적으로 탐욕스럽던(가능한한 많이 대응) 수량자를 탐욕스럽지 않게(가능한한 적게 대응) 만듭니다. 예를 들어 `/\d+/`를 "123abc"에 적용시키면 "123"과 대응됩니다. (`\d`는 `[0-9]`사이의 숫자를 의미합니다.) 그러나 `/\d+?/`는 오직 '1'만 가르킵니다.<br><br>또한 이 문자는 `x(?=y)`와 `x(?!y)` 항목에서 설명하는 바와 같이 사전 검증을 위해서도 쓰입니다.</center> |
|**`.`** | <center>개행 문자를 제외한 모든 단일 문자와 대응됩니다. 쉽게 말하면 그냥 단일문자처럼 사용됩니다.<br><br>예를 들어, `/.n/`은 "nay, an apple is on the tree"에서 "an", "on"에 대응되지만, 'nay'에는 대응되지 않습니다.</center> |
|**`(x)`** | <center>x에 대응하고 그것을 기억합니다. 괄호는 포획괄호라고 부릅니다.<br><br>패턴 `/(foo) (bar) \1 \2/`안의 `(foo)`와 `(bar)`는 문자열 "foo bar foo bar"에서 처음의 두 단어에 대응되고 이를 기억합니다. 패턴 내부의 \1과 \2는 문자열의 마지막 두 단어에 대응됩니다. 왜냐하면 `\n`(n === Number)은 수에 따라 포획괄호의 순서를 알려줍니다. 그래서 저 예제에선 \1이 (foo)가 되고, \2가 (bar)가 되는 것 입니다. <br><br>`\n`문법은 정규식의 패턴 부분에서 사용됩니다. 정규식의 치환 부분에서는 `$1 $2 $n`과 같은 문법이 사용되어야 합니다. 예를 들어, `'bar foo'.replace( /(...) (...)/, '$2 $1')`와 같이 사용합니다. `$&` 패턴은 앞에서 대응된 전체 문자열을 가리킵니다.</center> |
|**`(?:x)`** | <center>x에 대응되지만 대응된 것을 기억하지 않습니다. 괄호는 비포획괄호라고 부르고, 정규식 연산자가 같이 동작할 수 있게 하위 표현을 정의할 수 있습니다.<br><br> 정규식 예제 `/(? : foo){1,2}/`를 생각해 봅시다, 만약 정규식이 `/foo{1,2}`라면 {1,2}(1 <= 2)는 'foo'의 마지막 'o'에만 적용됩니다.  비포획괄호를 같이 쓴다면 {1,2}는 단어 'foo'전체에 해당됩니다.</center> |
|**`x(?=y)`** | <center>오직 y가 뒤따라오는 'x'에만 대응됩니다. 이것은 `lookahead`라고 불립니다.<br><br>예를 들어, `/Jack(?=Sprat)/`는 'Sprat'가 뒤따라오는 'Jack'에만 대응 됩니다. `/Jack(?=Sprat|Frost)/`는 'Sprat' 또는 'Frost'가 뒤 따라오는 Jack에만 대응합니다. 그러나 'Sprat'및 'Frost'는 대응 결과의 일부가 아닙니다.</center> |
|**`x(?!y)`** | <center>오직 y가 뒤따라오지 않는 x에만 일치합니다. 이것은 `negated lookahead`라고 부릅니다.<br><br>예를 들어 `/\d+(2!\.)/`는 소수점이 따라오지 않는 숫자에 일치합니다. 정규식 `/\d+(?!\.)/.exec("3.141")/`는 '3.141'이 아닌 '141'에 일치합니다.</center> |
|**`xㅣy`** | <center>'x' 또는 'y'에 대응됩니다.<br><br>예를들어 `/greenㅣred/`는 "green apple"의 'green'에 대응되고, "red apple"의 'red'에 대응됩니다.</center> |
|**`{n}`** | <center>앞 표현식에서 n번 나타나는 부분해 대응됩니다. N은 반드시 양의 정수여야합니다.<br><br>예를 들어, `/a{2}/`는 "candy"의 "a"에는 대응되지않지만, "caandy,"의 모든 a 와, "caaandy."의 첫 두 a 에는 대응됩니다.</center> |
|**`{n, m}`** | <center>`n`과`m`은 양의 정수이고, n <= m을 만족해야 합니다. m이 생략되면 ∞로 취급합니다.<br><br>예를 들어 `/a{1,3}/`는 cndy에서 아무것도 취급하지 못하지만, "caandy"의 첫 두 a와 "caaaaaaandy"의 첫 세 a 에 대응됩니다. 최대 3개임으로 aaa까지만 적용이 됩니다.</center> |
|**`[xyz]`** | <center>문자셋입니다. 이 패턴 타입은 괄호 안에 어떤 문자가 와도 대응됩니다. 점(.)이나, 별(*)과 같은 특수문자는 문자셋 내부에서는 특수문자가 아닙니다. 그렇기 때문에 이스케이프문을 사용하지 않아도 됩니다.<br><br>예를 들어  패턴 `[a-d]`는 패턴 `[abcd]`와 같은 동작을 합니다. "brisket"의 'b' 에 일치하고, "city"의 'c' 에 일치합니다. 패턴 `/[a-z.]+/`와 `[\w.]+/`는 "test.i.in"이라는 문자열에 모두 일치합니다.</center> |
|**`^[xyz]`** | <center>부정문자셋 또는 보충문자셋이라고 불리는 문자셋입니다. 괄호 내부에 등장하지 않는 어떤 문자와도 대응됩니다. 괄호 내부에 등장하지 않는 어떤 문자와도 대응됩니다. 하이픈을 이용하여 문자의 범위를 정할 수 있습니다. <br><br> 예를들어 패턴 `^[abc]`는 `[^a-c]`와 동일합니다. 두 패턴은 "brisket"의 'r', "chop."의 'h' 에 대응됩니다.(지정한 사용못하는 알파벳 다음꺼 인듯?)</center> |
|**`[\b]`** | <center>백스페이스에 대응됩니다. 백스페이스 리터럴에 대응시키기 위해선 대괄호(`[]`)가 꼭 필요합니다. 주의하세욧.(`\b`와 혼동하지 마세요)</center> |
|**`\b`** | <center>단어 경계에 대응합니다. 단어 경계는 다른 '단어 문자'가 앞이나 뒤에 등장하지 않는 위치에 대응됩니다. 단어의 경계는 대응 결과에 포함되지 않습니다. 같은 말로 단어의 경계에 대응되는 문자열의 길이는 항상 0입니다.<br><br>예를 들면<br>`/\bm/`는 "moon"의 m에 대응합니다.<br> 또 `/oo\b/`는 "moon"에서 "oo" 부분에서 마저 대응되지 않습니다. 그 이유는 'oo'을 뒤따라오는 'n'이 문자이기 때문입니다.<br>또 `/oon\b/`는 "moon"에서 "oon"부분에 대응합니다. 왜냐하면 'oon'은 문자열의 끝이라서 뒤따라오는 문자가 없기 때문입니다.<br>`/\w\b\w/`는 어떤 것에도 일치하지 않습니다. 왜냐하면, 단어 문자는 절대로 비 단어 문자와 단어 문자 두개가 뒤따라올수 없기 때문입니다. </center> |
|**`\B`** | <center>단어 경계가 아닌 부분에 대응됩니다. 아래와 같은 경우가 있습니다. <ul><li>문자열의 첫 번째 문자가 단어 문자가 아닌경우, 해당 문자열의 앞부분이 대응합니다.</li><li>문자열의 마지막 문자가 단어 문자가 아닌경우, 해당 문자의 뒷 부분이 대응됩니다.</li><li>두 단어 문자의 사이에 대응합니다.</li><li>단어 문자가 아닌 두 문자 사이에 대응합니다.</li><li>빈 문자열에 대응합니다.</li></ul><br>문자열의 시작과 끝은 문자가 아닌걸로 간주합니다.<br><br>예를 들어, `/\B../`는 "noonday"의 'oo'와 대응되며, `/y\B./`는 "possibly yesterday."의 'ye'와 대응됩니다.</center> |
|**`\cX`** | <center>문자열 내부의 제어 문자에 대응합니다. 여기서 X는 A에서 Z까지의 문자 중 하나입니다.<br><br>예를 들어 `/\cM/`는 문자열에서 control-M에 대응합니다.</center> |
|**`\d`** | <center>숫자 문자에만 대응합니다. [0-9]와 동일합니다.<br><br>예를 들어 `/\d/` 또는 `/[0-9]/`는 "B2 is the suite number."에서 '2'에 대응됩니다.</center> |
|**`\D`** | <center>숫자 문자가 아닌 것에 대응합니다. `[^0-9]`와 동일합니다. <br><br>예를 들어, `/\D/` 또는 `/[^0-9]/`는 "B2 is the suite number."의 'B'에 대응됩니다.</center> |
|**`\f`** | <center>폼피드 문자에 대응됩니다.</center> |
|**`\n`** | <center>줄바꿈 문자에 대응됩니다.</center> |
|**`\t`** | <center>탭 문자에 대응됩니다.</center> |
|**`\v`** | <center>수직 탭 문자에 대응됩니다.</center> |
|**`\r`** | <center>캐리지 리턴 문자에 대응됩니다.</center> |
|**`\s`** | <center>스페이스, 폼피드, 탭, 줄 바꿈 문자등을 포함한 하나의 공백 문자에 대응합니다. `[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`와 동일합니다.<br><br> 예를 들어, `/\s\w*/`는 "foo bar."의 'bar'에 대응합니다.</center> |
|**`\S`** | <center>공백 문자가 아닌 하나의 문자에 대응합니다. `[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`와 동일합니다. <br><br>예를 들어, `/\S\w*/`는 "foo bar"의 'foo'에 대응합니다.</center> |
|**`\w`** | <center>밑줄 문자를 포함한 영숫자 문자에 대응됩니다. `[A-Za-z0-9_]`와 동일합니다.(\w에 대응하는 문자를 `단어 문자`라고합니다.<br><br>예를 들어, `/\w/`는 "apple,"의 'a'에 대응되고, "$5.28,"의 '5'에 대응되고, "3D."의 '3'에 대응합니다.</center> |
|**`\W`** | <center>단어 문자가 아닌 문자에 대응합니다. `[^A-Za-z0-9_]`와 동일합니다.<br><br>예를 들어, `/\W/`또는 `[^A-Za-z0-9_]`는 "50%."의 '%'에 대응합니다.</center> |
|**`\n`** | <center>(이거 줄바꿈이랑 같은데...? 원래이런감..)정규식 내부의 n번째 괄호에서 대응된 부분에 대한 역참조 입니다. 여기서 n은 양의 정수입니다.<br><br>예를 들어,`/apple(,)\sorange\1/`는  "apple, orange, cherry, peach."의 'apple,orange'에 일치합니다.</center> |
|**`\0`** | <center>널 문자에 대응합니다. 이때 뒤에 다른 숫자를 사용하면 안됩니다. 왜냐하면 8진 이스케이프 시퀸스 이기 때문입니다.</center> |
|**`\xhh`** | <center>코드가 hh(두 16진 숫자)인 문자에 일치합니다.</center> |
|**`\uhhhh`** | <center>코드가 hhhh(네개의 16진 숫자)인 문자에 일치합니다.</center> |
|
사용자 입력을 이스케이프에서 해야한다면 다음과 같이 처리하시면 됩니다.

```js
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $&는 일치한 전체 문자열을 의미합니다.
}
```

# 괄호를 사용하기
정규식 내부의 일부를 둘러싼 괄호는, 해당 부분에서 대응된 문자열을 기억하는 효과를 갖습니다. 기억된 문자열은 다른 곳에서 사용하기 위하여 불러와질 수 있습니다.

예를 들면, 패턴 `/Chapter (\d+)\.\d*/`는 패턴의 일부분이 기억될 거라는 사실을 나타냅니다. 이 패턴은 하나 이상의 숫자(`\d`는 숫자를 의미하고 `+`는 1개 이상을 의미) 이후에 하나의 소수점 (\가 앞에 붙은 소수점은 문자 그대로의 문자 '.'에 대응됨을 나타냄), 그 뒤 0개 이상의 숫자(`\d`는 숫자, `*`는 0개 이상을 의미)가 뒤따라오는 `Chapter` 문자열에 대응됩니다. 더해서, 괄호는 처음으로 일치하는 숫자 문자들을 기억하기 위하여 사용되었습니다.

이 패턴은 "Open Chapter 4.3, paragraph 6"라는 문자열에서 나타날 수 있으며, '4'가 기억됩니다. 이 패턴은 "Chapter 3 and 4"에는 나타나지 않습니다. 왜냐하면 문자열이 '3' 이후에 마침표를 가지고 있지 않기 때문입니다.

부분 문자열을 대응시키면서도 해당 부분을 기억하지 않으려면, 괄호의 첫머리에 `?:` 패턴을 사용하세요. 예를 들어, `(?:\d+)`는 1개 이상의 숫자에 대응되지만 해당 문자들을 기억하지 않습니다.

# 정규식 사용하기
정규식은 `RegExp`,`test`,`exec`,`String`,`match`,`replace`,`search`,`split` 메소드와 함께 쓰입니다. 이 메소드는 [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)에서 잘 설명되어 있습니다.

**정규식에서 쓰이는 메소드**
|<center>Method</center>|<center>Description</center>|
|:--------:|:--------:|
|**`exec`** | <center>대응되는 문자열을 찾는 `RegExp`메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.</center> |
|**`test`** | <center>대응되는 문자열이 있는지 검사하는 `RegExp` 메소드 입니다. true나 false를 반환합니다.</center> |
|**`match`** | <center>대응되는 문자열을 찾는 `RegExp`메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.</center> |
|**`search`** | <center>대응되는 문자열이 있는지 검사하는 `String` 메소드 입니다. 대응된 부분의 인덱스를 반환합니다. 대응되는 문자열을 찾지 못했다면 -1을 반환합니다.</center> |
|**`replace`** | <center>대응되는 문자열을 찾아 다른 문자열로 치환하는 `String`메소드 입니다.</center> |
|**`split`** | <center>정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 `String`메소드 입니다.</center> |
|  
문자열 내부에 패턴과 대응되는 부분이 있는지 알고 싶다면, `test`나 `search` 메소드를 사용하세요, 좀 더 많은 정보를 원하면 `exec`나 `match`메소드를 사용하세요. 하지만 exec나, match는 속도가 느립니다. 만약 `exec`나 `match`메소드를 사용했는데 대응되는 부분이 있다면, 이 메소드는 배열을 반환하고 정규식 객체의 속성을 업데이트 합니다. 만약 대응되는 부분이 없다면, `exec`메소드는 `null`을 반환합니다. 즉 false과 같은 의미입니다.

아래의 예에서는, 문자열 내부에서 대응되는 부분을 찾기 위해 `exec`메소드를 사용했습니다.
```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```
만약 정규식 속성에 접근할 필요가 없다면, 아래와 같이 `myArray`를 만드는 방법도 있습니다.

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
```
문자열로 정규식을 만들고 싶다면, 이런 방법도 있습니다
```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```
위 예제에서의 두 번째 형태처럼, 정규식 객체를 변수에 대입하지 않고도 사용할 수 있습니다. 하지만, 이렇게 하면 정규식 객체가 매번 새로 생성됩니다. 이러한 이유로, 만약 변수에 대입하지 않는 형태를 사용하는 경우 나중에 그 정규식의 속성에 접근할 수 없게 됩니다. 예를 들어, 이러한 스크립트가 있을 수 있습니다.

## Property or index - 메소드
- index : 입력된 문자열에서 대응된 부분에 해당하는 인덱스(0부터 시작)
- input : 입력된 원본 문자열
- lastIndex : 다음 검색 시 검색을 시작할 인덱스
- source : 패턴 문자열. 정규식이 생성될 때 갱신됩니다. 실행 시점에는 갱신되지 않습니다.

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("The value of lastIndex is" + myRe.lastIndex);

// The value of lastIndex is 5
```
그러나, 만약 이러한 스크립트가 있으면
```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + )

// THe value of lastIndex is 0
```
# 괄호로 둘러싼 패턴 사용하기
정규식 패턴에 괄호를 사용하면, 그 부분을 별도로 대응시키면서 대응된 부분을 기억합니다. 예를 들면, `/a(b)c/`는 'abc'와 대응되면서 'b'를 기억합니다. 괄호로 감싸진 문자열을 불러오려면, 배열요소 `[1]`,...,`[n]`를 사용하세요.

괄호로 감쌀 수 있는 문자열의 길이는 제한이 없습니다. 반환된 배열은 찾아낸 모든 것들을 갖고 있습니다. 다음의 예는 괄호로 둘러싸진 부분이 어떻게 대응되는지 보여줍니다.

문자열 내부의 단어를 바꾸기 위해 `replace()`메소드를 이용하고 있습니다. 치환 문자열로는 `$1`과 `$2`를 사용하고 있는데, 이는 각각 첫 번째와 두 번째 괄호가 쳐진 부분에 대응된 문자열을 가리킵니다.

```js
var re = /(\w+)\s(\w+)/;
// (\w+) = 단어문자가 한개이상(알파벳이나,숫자가 여러개)
// \s = 공백문자
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
// Smith, John
```
# 플래그를 사용한 고급검색
정규식은 다섯 개의 플래그를 설정해줄 수 있으며, 이를 통해 전역 검색 또는 대소문자 구분 없는 검색을 수행할 수 있습니다. 이 플래그들은 각기 사용될 수도 있고 함께 사용될 수도 있고 순서에 구분이 없습니다.

- `g` : 전역 검색
- `i` : 대소문자 구분 없는 검색
- `m` : 다중행 검색
- `u` : 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급합니다.
- `y` : "sticky" 검색을 수행. 문자열의 현재 위치부터 검색을 수행합니다.

정규식을 플래그에 포함시키기 위해서는 특별한 문법이 필요합니다.
```js
var re = /pattern/flags;
// 또는
var re = new RegExp("pattern", "flags");
```
이 플래그는 정규식에 합쳐지는 정보임을 기억하는게 좋습니다. 이것들은 나중에 추가되거나 제거될 수 없습니다.

예를 들어 `re = /\w+\s/g`는 한 개 이상의 문자열 뒤에 공백이 하나 있는 패턴을 찾는 정규식을 생성합니다. 그리고 문자열 전체에 걸쳐 이 조합을 검색합니다.

```js
var re = /\w+\s/g;
// \w+\s = 문자열뒤에 공백이 있는 경우
var str = "fee fi fo fum";
var myArray = str.match(re);
// match = 대응되는 문자열을 배열로 반환
console.log(myArray);
// ["fee", "fi", "fo"]
```
`var re = /\w+\s/g`를 다르게 쓰면
```js
var re = new RegExp("\\w+\\s", "g");
```
그리고 같은 결과를 얻습니다.

`.exec()`메소드를 사용할 때에는 `g` 플래그에 대한 동작이 다릅니다. ("클래스"와 "인수"의 역할이 뒤바뀝니다: `.match()`를 사용할 때는, string클래스가 메소드를 갖고 정규식은 인수였던 것에 반해, `.exec()`를 사용할 때는 정규식이 메소드를 갖고 문자열이 인수가 됩니다. `str.match(re)`과 `re.exec(str)`를 비교해보세요.) `g`플래그와 `.exec()`메소드가 함께 사용되면 진행상황에 대한 정보가 반영됩니다.

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var xArray;
while(xArray = re.exec(str)) {
    console.log(xArray);
}
// 출력 결과
// exec는 문자열을 배열로 나타낸다.

// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```

`m`플래그는 여러 줄의 입력 문자열이 실제로 여러 줄로서 다뤄져야 하는 경우에 쓰입니다. 만약 `m`플래그가 사용되면, `^`와 `$`문자는 전체 문자열의 시작과 끝에 대응되는 것이 아니라 각 라인의 시작과 끝에 대응됩니다.

# 예제
다음의 예는 정규 표현식의 몇 가지 사용법을 보여줍니다.

## 입력 문자열에서 순서를 변경하기
---
다음 예는 정규식의, `string.split()`과 `string.replace()`의 사용을 설명합니다. 그 것은 공백, 탭과 정확히 하나의 세미콜론의 구분으로 이름(이름을 먼저)이 포함된 대략 형식의 입력 문자열을 정리합니다. 마지막으로, 순서를 뒤 바꾸고 목록을 정렬합니다.

```js
var names = "Harry Trump ;Fred Barnry ;Helen Rigby ; Bill Abel ; Chris Hand";
var output = ["---------- Original String\n", names + "\n"];

var pattern = /\s*;\s*/;
// 해석하면
// 공백문자가 0개이거나 그 이상 이고 그 다음 세미콜론(;)이 나온 후 한번더 공백문자가 0개거나 있는 경우.

var nameList = names.split(pattern);

pattern = /(\w+)\s+(\w+)/;
// 해석하면
// 단어문자가 1개 이상이고 공백이 한개 이상있고, 단어문자가 한개 이상인 경우.
// ex) abcd abcd === true

var bySurnameList = [];

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {  // 0 < 5
    output.push(nameList[i]);   // output의 배열에 output[3]부터 nameList[i]번지 값을 push해줌
    bySurnameList[i] = nameList[i].replace (pattern, "$2, $1"); // bySurnameList에는 nameList[i] 번지에 있는 값을 $2 $1로 넣어줌.
}

// Display the new array.
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++) {
    output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.push("\n"));

for(i = 0; i < output.length; i++)
    console.log(output[i]);
```

## 입력을 확인하기 위해 특수 문자를 사용하기
다음 예에서, 사용자는 전화번호를 입력 할 것으로 예상됩니다. 사용자가 "Check"버튼을 누를때, 스크립트는 번호의 유효성을 검사합니다. 번호가 유추한 경우, 스크립트는 사용자에게 감사하는 메시지와 번호를 확인하는 메시지를 나타냅니다. 번호가 유효하지 않은 경우, 스크립트는 전화번호가 유효하지 않다는 것을 사용자에게 알립니다.

사용자가 <Enter>키를 누를 때 활성화 변경 이벤트는 RegExp.input의 값을 설정합니다.
```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">  
        <meta http-equiv="Content-Script-Type" content="text/javascript">  
        <script type="text/javascript">
             var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
            // 
             function testInfo(phoneInput) {
                 var OK = re.exec(phoneInput.value);
                 if (!OK)
                    window.alert(OK.input + "isn't a phone number with area code!");
                else
                    window.aleat("Thanks, your phone number is " + OK[0]);
             }
        </script>
    </head>
    <body>
        <p>Enter your phone number (wite area code) and then click "Check".
        <br>The expected format is like ###-###-####. </p>
        <form action="#">
            <input id = "phone"><button onClick="testInfo(document.getElementById('phone'));">Check</button>
        </form>
    </body>
</html>
```
# 알아 두면 좋은 정규 표현식
정규표현식을 배우고도 일반적으로 사용하기 힘들고, 어려운게 대부분입니다. 그래서 웹 개발을 하면서 일반적으로 많이 사용하는 정규 표현식에 대해 알려드리곘습니다.
## Matching a UserName
---
```js
var UserName = /^[a-z0-9_-]{3, 16}$/
```
언더 스코어( _ )나, 하이픈( - )이나 문자단어가 3개 이상 15개 이하로 있을 때 true인 경우

## Matching a Password
---
```js
var PassWord = /^[a-z0-9_-]{6, 18}$/
```
언더 스코어( _ )나, 하이픈( - )이나 문자단어가 6개 이상 17개 이하로 있을 때 true인 경우

## Matching a HEX value
---
```js
var HEX_value = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
```
\#은 있어도 대고 없어도 대연. a와f사이에 소문자나 숫자가 6번 나오거나, 3개만 a와 f사이에 소문자나 숫자가 나올 수 있다. 라는 뜻

## Matching an Email
---
```js
var an_Email = /^([a-z0-9+\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,12})$/
```

## Matching a URL
---
```js
var URL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w_\.-]*)*\/?$/
```

## Matching an IP Address
---
```js
var IP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
```

## Matching an HTML Tag
---
```js
var HTML_Tag = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
```

---

지금 적었던 예시들은 그냥 보고 따라하시는게 최고입니다...ㅎㅎㅎ