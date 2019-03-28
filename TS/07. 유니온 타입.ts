// 유니온 타입 예제
// 타입을 여러개 적을 수 있다.
function square(value: number, returnString: boolean = false): string | number {
  const squared = value * value;

  if (returnString) {
    return squared.toString();
  }

  return squared;
}

const stringOrNumber: string | number = square(1, false);

type SquaredType = string | number;
function square2(value: number, returnString: boolean = false): SquaredType {
  const squared = value * value;

  if (returnString) {
    return squared.toString();
  }

  return squared;
}
