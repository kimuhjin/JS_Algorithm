/*
문제49 : 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

```jsx
**입출력**

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
```
*/

// 내 답안
const Number = "10 9 8 7 6 5 4 3 2 1".split(" ").map((i) => parseInt(i, 10));
console.log(Number);
const NewArray = Number.reduce((a, b) => (a > b ? a : b));
console.log(NewArray);

// 답안
let numbers = prompt("10개의 숫자를 입력하세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });
numbers.sort((a, b) => {
  return b - a;
});
console.log(numbers[0]);
