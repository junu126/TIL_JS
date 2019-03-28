// 제너릭 타입 변수

/**           |      함수        &                  제너릭               |
 * 정의 시점  |      매개변수     |                 타입변수              |
 * 정의 예시  |  (a: any) => {}  |           type MyArry<T> = T[]        |
 * 사용 시    | 실제값 (3, 42)등  |       실제 타입 (number, strnig) 등   |
 * 사용 예시  | a(3); a(42);     |  type MyNumberArray = MyArray<number> |
 */

function getFirstelem<T>(arr: T[]): T {
  return arr[0];
}

/*
  function 함수명<타입 변수> (인자 타입): 반환타입 {
    본문
  }
  의 형식으로 이루어진다.
*/

const languages: string[] = ["TypeScript", "JavaScript"];
const language = getFirstelem<string>(languages);
const language2 = getFirstelem<number>([1, 2, 3]);

type MyArray<T> = T[];
const drinks: MyArray<string> = ["coffee", "Milk", "Beer"];
