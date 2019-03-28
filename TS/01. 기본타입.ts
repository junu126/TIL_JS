// 불리언
const isTypeScriptAwesome: boolean = true;
const doesJavaScriptHasTypes: boolean = false;

// 숫자
const yourScore: number = 100;
const ieee7541sAwesome: number = 0.1 + 0.2; // 0.3000000000000004

// 문자열
const authorName: string = "안희종";
const toReaders: string = `
  책을 읽어주셔서 감사합니다.
  도움이 되었으면 좋겠습니다.
`;

// null
const nullValue: null = null;
const numberValue: number = null; // strict 모드에서는 에러

// undefined
const undefinedValue: undefined = undefined;

// any -> 타입 안정성에 구멍이 생겨서 ts사용 의의가 사라지므로 꼭 필요한 경우만
let bool: any = true;
bool = 3;
bool = "whatever";
bool = {};

// void -> null과 undefined만 값으로 가질 수 있다. (아무것도 반환 X) ( 함수 용 )
function nothing(): void {}

// never -> 어떤 값도 가질 수 없다. ( 함수 용 )
// alwaysThrow() 함수는 항상 에러를 throw 하므로 어떤 값도 반환하지 않는다.
function alwaysThrow(): never {
  throw new Error("I'm a wicked function!");
}
