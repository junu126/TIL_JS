// 인터페이스 ( interface ) <-- 값이 따라야 할 제약을 타입으로 표현.
interface User {
  name: string;
  readonly height: number;
  favoriteLanguage?: string;
}
const author: User = {
  name: "안희종",
  height: 176 /* favoriteLanguage: 있어도 되고 엄서도댐 */
};

//  error TS2540: Cannot assign to 'height' because it is a constant or a read-only property.
// author.height = 183;

// 함수 인터페이스
// (함수명 : 매개변수 타입): 리턴 타입
interface GetUserName {
  (user: User): string;
}
const getUserName: GetUserName = value => {
  return value.name;
};

// 하이브리드 타입
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = () => {};
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 제너릭 인터페이스
interface MyResponse<Data> {
  data: Data;
  status: number;
  ok: boolean;
}
interface User {
  name: string;
  readonly height: number;
}

// const user: MyResponse<User> = await getUserApiCall(userId);
// user.name;

// 함수 인터페이스 정의 - 제너릭
interface GetData {
  <Data>(response: MyResponse<Data>): Data;
}
