// 열거형 [ enum ] -> number type으로 순차적으로 들어간다.

enum Direction {
  East, // 0
  West, // 1
  South, // 2
  North // 3
}

enum ExplicitDirection {
  East = 0,
  West = 1,
  South = 2,
  North = 3
}

const south: Direction = Direction.South;
console.log(south);

enum InitializedDirection2 {
  East = 3,
  West, // 4,
  South = 7,
  North // 8,
}

enum StringDirection {
  East = "East",
  West = "West",
  South = "South",
  North = "North"
}

// 이형 열거형 - 여러 타입을 적을 수 있다. 하지만 권장 X
enum HeterogeneousEnum {
  East = "East",
  West = "West",
  South = 5,
  North = 6
}

// 상수멤버를 열거맴버로 선언
const getAnswer = (): number => {
  return 42;
};
enum SpecialNumbers {
  Answer = getAnswer()
  // 상수멤버의 뒤에 선언된 열거멤버는 자동으로 초기화가 안된다.
  // MyStery <- error TS1061: Enum member must have initializer.
}

// 런타임에서의 열거형
enum RunTimeDirection {
  East,
  West,
  South,
  North
}
const east: RunTimeDirection = RunTimeDirection.East;

// 위를 컴파일

// 오버헤드를 정말 심하게 사용하여 성능이 매우 안좋다.
// 성능을 향상 시키기위해선 cosnt enum을 사용.
var RunTimeDirectionCompile;
(function(Direction) {
  Direction[(Direction["East"] = 0)] = "East";
  Direction[(Direction["West"] = 1)] = "West";
  Direction[(Direction["South"] = 2)] = "South";
  Direction[(Direction["North"] = 3)] = "North";
})(RunTimeDirectionCompile || (RunTimeDirectionCompile = {}));
var eastCompile = RunTimeDirectionCompile.East;

// const enum
const enum ConstEnum {
  A,
  B = 2,
  C = B * 2,
  D = -C
}

console.log(ConstEnum.A);

// 위를 컴파일

// 단지 상수로만 나와있다.
console.log(0 /* A */);

// 유니온 열거형 ( 값이면서 타입 )
enum ShapeKind {
  Circle,
  Triangle = 3,
  Square
}
type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
};
type Triangle = {
  kind: ShapeKind.Triangle;
  maxAngle: number;
};
type Square = {
  kind: ShapeKind.Square;
  maxLength: number;
};
type Shape = Circle | Triangle | Square;
