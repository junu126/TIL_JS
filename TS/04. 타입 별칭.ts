// type NewType = Type; 을 통해 정의 가능.
type UUID = string;
type Height = number;
type AnotherUUID = UUID;

type Animal = string;
type Animals = Animal[];
const MyPets: Animals = ["tiger", "monkey", "dog"];

type User = {
  name: string;
  height?: number;
};
function User(user: User): void {
  console.log(user.name);
  console.log(user.height);
}

const user: User = { name: "asdf", height: 123 };
User(user);
// User(123) => Error가 나옴. - 타입을 안맞춤.
// 이때 에러는 User Type으로 나오는게 아니라 Object를 안맞쳣다고 나옴.
