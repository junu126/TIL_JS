# ExpressJS에서 MySQL연동

## Express-Sequelize

시퀄라이즈라고 불리며 `ORM`의 한종류이다.

> **ORM** : Object-Relational-Mapping의 약자로 자바스크립트 객체와 데이터베이스의 릴레이션을 매핑해주는 도구.

시퀄라이즈를 이용하여 MySQL, MariaDB, PostgreSQL, SQLite, MSSQL 등 다른 데이터베이스도 같이 사용할 수 있다.

### 사용 이유

1. 자바스크립트 구문을 SQL로 바꿔줌. (SQL 언어를 사용할 필요가 없음.)

2. 콘솔 명령어를 통한 세팅가능.

### Install

```powershell
npm i sequelize mysql2
npm i -g sequelize-cli

sequelize init
```

이후 config, models, migrations, seeders 폴더 확인.

### 테이블간의 관계

테이블 간의 관계를 정의하는 것은 무척이나 중요하다.
크게 3가지로 나뉘는데 `1:N` / `1:1` / `N:M` 관계로 나뉜다.
예를 들며 관계들을 설명한다.

---

#### 1:N관계

'일대다 관계' 라고 불리며 예를들어 설명하면, 사용자 한 명은 댓글을 여러 개 작성할 수 있지만, 댓글은 한 사람이 작성한 것 이다. ( 작성자는 한명이다. ) 이러한 관계를 1:N 관계라고 한다.

시퀄라이즈에서는 1:N관계를 `hasMany`메서드로 표현한다. DB테이블 A와 B가 있을 때 A의 로우 하나를 불러오면 B의 로우들도 같이 불러온다.

|&nbsp;&nbsp;&nbsp;->&nbsp;&nbsp;&nbsp;| hasMany
| 1 : N |
|&nbsp;&nbsp;&nbsp;<-&nbsp;&nbsp;&nbsp;| belongsTo

---

#### 1:1관계

'일대일 관계' 라고 불리며 예를들어 설명하면, 사용자와 사용자에 대한 정보 테이블을 예로 들 수 있다. 사용자 한명은 자신의 정보를 담고 있는 테이블과만 관계가 있고, 정보테이블도 한 사람만을 가릔다. 이러한 관계를 1:1 관계라고 한다.

시퀄라이즈에서는 1:1관계를 `hasOne`메서드와 `belongsTo`메서드를 사용한다. hasOne과 belongsTo는 1:1의 관계이기 때문에 반대여도 상관이 없다.

|&nbsp;&nbsp;&nbsp;->&nbsp;&nbsp;&nbsp;| hasOne / belongsTo
| 1 : 1 |
|&nbsp;&nbsp;&nbsp;<-&nbsp;&nbsp;&nbsp;| belongsTo / hasOne

---

#### N:M관계

'다대다 관계' 라고 불리며 예를들어 설명하면, 게시글 테이블과 해시태그(#) 테이블 관계로 예를 들 수 있다. 한 게시물에는 해시태그가 여러 개 달릴 수 있고, 한 해시태그도 여러 개시글에 달릴 수 있다. 이러한 관계를 N:M 관계라고 한다.

시퀄라이즈에서는 N:M관계를 `belongsToMany`메서드를 사용하여 다룰 수 있다. 메서드를 이용해 새로운 모델을 만든 후 모델을 이용한다.

---

MySQL에서는 JOIN이라는 기능을 통해 관계를 파악해 결과를 도출한다.
SequeLize에서는 JOIN기능을 알아서 구현해준다.

## Query

MySQL문을 시퀄라이즈에서 쿼리로 작성하는 예제를 통해 시퀄라이즈의 쿼리문을 설명한다.

시퀄라이즈에서 쿼리문을 작성할 때 주의할 점이 있다면, MySQL의 자료형이 아니라 시퀄라이즈 모델을 작성할 때 정의한 자료형대로 넣어야한다.

1. 로우를 생성하는 쿼리

**INSERT INTO nodejs.users (name, age, married, comment) VALUES ('zero', 24, 0, '자기소개1');**

```js
const { User } = require('../models');

User.create({
  name: 'zero',
  age: 24,
  married: false,
  comment: '자기소개1',
});
```

2. 테이블의 모든 데이터를 조회

**SELECT * FROM nodejs.users;**

```js
const { User } = require('../models');

User.findAll({
  // ...
});
```

3. 테이블의 데이터 하나만 조회. ( 가장 최상위 데이터 )

**SELECT * FROM nodejs.users LIMIT 1;**

```js
const { User } = require('../models');

User.find({
  // ...
});
```

4. 원하는 칼럼 조회. ( AND 연산 )

**SELECT name, age FROM nodejs.users WHERE married = 1 AND age > 30;**

```js
const { User, Sequelize: { Op } } = require('../models');

User.findAll({
  attributes: ['name', 'age'],
  where: {
    married: 1,
    age: { [Op.gt]: 30 },
  },
});
```

중간에 위치하는 where 옵션이 시퀄라이즈에서 조건들을 나열하는 옵션이다. Op는 시퀄라이즈에서 쿼리를 생성하기 위한 특수한 연산자이다. 자주 쓰이는 연산자로는 초과, 이상, 미만, 이하, 같지 않음, 또는, 배열 요소 중 하나, 배열 요소와 모두 다름 등이 있다.

- `Op.gt` = 초과
- `Op.gte` = 이상
- `Op.lt` = 미만
- `Op.lte` = 이하
- `Op.ne` = 같지 않음 ( !== )
- `Op.or` = 또는
- `Op.in` = 배열 요소 중 하나
- `Op.notIn` = 배열 요소와 모두 다름

5. 원하는 칼럼 조회 ( OR연산 )

**SELECT id, name FROM nodejs.users WHERE married = 0 OR age > 30;**

```js
const { User, Sequelize: { Op } } = require('../models');

User.findAll({
  attributes: ['id', 'name'],
  where: {
    [Op.or]: [{ married: 0 }, { age: { [Op.at]: 30 } }],
  },
});
```

6. 내림차순 정렬

**SELECT id, name FROM nodejs.users ORDER BY age DESC;**

```js
const { User, Sequelize: { Op } } = require('../models');

User.findAll({
  attributes: ['id', 'name'],
  order: [['age', 'DESC']],
});
```

위의 코드는 `age`에 맞춰서 내림차순으로 정렬한 `id`, `name`컬럼을 조회하는 코드이다.

7. 불러올 로우 개수 설정 ( 가장 최상위 데이터)

**SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1;**

```js
const { User, Sequelize: { Op } } = require('../models');

User.findAll({
  attributes: ['id', 'name'],
  order: [['age', 'DESC']],
  limit: 1,
})
```

8. 불러올 로우 개수 설정 ( 원하는 데이터 [(ex) 두번째 데이터] )

**SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1 OFFSET 1;**

```js
const { User, Sequelize: { Op } } = require('../models');

User.findAll({
  attributes: ['id', 'name'],
  order: [['age', 'DESC']],
  limit: 1,   // 하나의 데이터만 불러옴.
  offset: 1,  // offset이 1일때 둘째 데이터를 불러온다.
})
```

9. 로우를 수정하는 쿼리

**UPDATE nodejs.users SET comment = '바꿀 내용' WHERE id = 2;**

```js
const { User } = require('../models');

User.update({
  comment: '바꿀 내용',
}, {
  where: { id: 2 },
});
```

10. 로우를 삭제하는 쿼리

**DELETE FROM nodejs.users WHERE id = 2;**

```js
const { User } = require('../models');

User.destory({
  where: { id: 2 },
});
```