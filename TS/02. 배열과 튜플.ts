// 배열
const pibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const myFavoriteBears: string[] = ["a", "b", "c", "d"];

const pibonacci2: Array<number> = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const myFavoriteBears2: Array<string> = ["0", "1", "2", "3", "4"];

// 튜플
const nameAndHeight: [string, number] = ["안희종", 176];

// 명시한 튜플의 개수만큼 해야한느데 넘어서서 에러.
//const invalidNameAndHeight: [string, number] = ["안희종", 176, true];

const validNameAndHeight: [string, number] = ["안희종", 176];
validNameAndHeight.push(42); // no error
// Array.prototype.??? 이라는 메소드를 사용하면 no Error
