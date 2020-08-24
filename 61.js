/*
문제61 : 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

**입력**
aaabbbbcdddd

**출력**
a3b4c1d4
*/

// 내 답안
const input = "aaabbbbcdddd".split("");
console.log(input);
let 중복제거 = new Set(input);
const 중복제거된배열 = [...중복제거];
// set을 배열로 바꾸려면 spread를 쓰면 된다.
console.log(중복제거된배열);
let result = [];

for (let index in 중복제거된배열) {
  let count = 0;
  for (let i in input) {
    if (중복제거된배열[index] === input[i]) {
      count = count + 1;
    }
  }
  result.push(중복제거된배열[index] + count);
}
const answer = result.join("");
console.log(answer);
