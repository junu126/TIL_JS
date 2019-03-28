type Programmer = { favoriteLanguage: string };
type BeerLover = { favoriteBeer: string };

// 인터섹션 타입 ( & ) 객체 타입 여러개의 속성을 모두 갖음.
type BeerLovingProgrammer = Programmer & BeerLover;
type Awesome = string & number & Programmer & BeerLover;

// 어떤 값도 만족하지 못하는 인터섹션 타입
type Infeasible = string & number; // 문자열과 숫자는 동시에 존재 못한다.
