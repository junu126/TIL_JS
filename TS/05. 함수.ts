// 함수 값의 타입 표기
type SumFunction = (a: number, b: number) => number;
const definitelySum: SumFunction = (a, b) => a + b;
const sum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

// arrow함수를 통해 함수 만들기
const logGreetings = (name: string): void => {
  console.log(`Hello, ${name}!`);
};

const notReallyVoid = (): void => {
  // return 1; // error TS2322: Type '1' is not assignable to type 'void'.
};

// 기본 매개변수
const greetings = (name: string = "stranger"): void => {
  console.log(`Hello, ${name}`);
};
greetings("Heejong"); // Hello, Heejong!
greetings(); // Hello, stranger!

// 선택 매개변수
const fetchVideo = (url: string, subTitleLanguage?: string) => {
  if (subTitleLanguage) {
    console.log("true");
  }
};
fetchVideo("https://example.com", "ko"); // true - noError
fetchVideo("https://example.com"); // noError

// const invalidFetchVideo = (subtitleUrl? : string, url: string) => {
//  // ...
// }
// error TS1016: A required parameter cannot follow an optional parameter.
// 선택 매개변수는 requied한 매개변수 앞에 올 수 없다.

// This 타입
interface HTMLElement {
  tagName: string;
}

interface Handler {
  (this: HTMLElement, event: Event, callback: () => void): void;
}

let cb: any;

const onClick: Handler = (event, cb) => {
  console.log(this.tagName);
  cb();
};

// this타입을 void로 명시시켜 this에 접근못하게 함.
interface noThis {
  (this: void): void;
}

const noThis: noThis = () => {
  console.log(this.a); // Property 'a' does not exist on type 'void'.
};
