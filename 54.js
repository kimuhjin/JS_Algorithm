/*
문제54 : 연속되는 수

은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다.
그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.
스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

입력1
1 2 3 4 5

출력1
YES


입력2
1 4 2 6 3

출력2
NO
*/

// 내 답안
const input = "1 2 3 4 5".split(" ").map((v) => parseInt(v, 10));
console.log(input);
let result = [];
for (let i = 0; i < input.length - 1; i++) {
  if (input[i] + 1 === input[i + 1]) {
    result.push(0);
  }
  if (input[i] + 1 !== input[i + 1]) {
    result.push(1);
  }
}
console.log(result.reduce((a, b) => a + b) === 0 ? "YES" : "NO");

// 답안
function sol(l) {
  l.sort((a, b) => {
    return a - b;
  });
  // 받아온 배열을 오름차순으로 정렬한 뒤,
  for (let i = 0; i < l.length - 1; i++) {
    if (l[i] + 1 !== l[i + 1]) {
      return "NO";
      // 앞의 숫자 + 1이 뒤에숫자와 다를경우 "NO"를 리턴하고
    }
  }
  return "YES";
  // 맞다면 YES를 리턴한다.
}
const n = prompt("입력해주세요")
  .split(" ")
  .map((n) => parseInt(n, 10));
console.log(sol(n));
