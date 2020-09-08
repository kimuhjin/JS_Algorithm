/*
문제81 : 지뢰찾기

지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. **깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램**을 만드세요.

- 아래 Case 외 예외 사항은 고려하지 않습니다.
(예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.) 
실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.

데이터
let flag = []; //지뢰 없이 깃발만 있는 리스트
let minesweeper = []; //지뢰를 찾은 리스트
let count = 0;

console.log(flag);
console.log(minesweeper);


입력
0 1 0 0 0
0 0 0 0 0
0 0 0 1 0
0 0 1 0 0
0 0 0 0 0
//"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

출력
* f * 0 0
0 * 0 * 0
0 0 * f *
0 * f * 0
0 0 * 0 0
*/

// 내 답안

const input = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
// const input = "0 0 0 1 0\n0 1 0 0 0\n0 0 1 0 0\n0 1 0 0 0\n1 0 0 0 0";
const arr = input.replaceAll("\n", " ").split(" ");
console.log(input);
// .map((i)=>parseInt(i,10))

let index = [];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  if (arr[i] === "1") {
    index.push(arr.indexOf(arr[i]));
    arr[i] = "f";
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "f") {
    arr[i - 1] = "*";
    arr[i + 1] = "*";
    arr[i + 5] = "*";
    arr[i - 5] = "*";
  }
}
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (i === 4 || i === 9 || i === 14 || i === 19) {
    result.push(arr[i], `\n`);
  } else {
    result.push(arr[i]);
  }
}
// console.log(index);

console.log(result.join(""));

// 답안

// 첫번째 풀이
let value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
let sp = value.split("\n");
let count = 0;

for (let i of sp) {
  sp[count] = i.replace("1", "f").split(" ");
  count += 1;
}

count = 0;
let search = 0;

for (let s of sp) {
  for (let i of s) {
    if (i === "f") {
      search = s.indexOf(i);
      if (search > 0) {
        s[search - 1] = "*";
      }
      if (search < 4) {
        s[search + 1] = "*";
      }
      if (count > 0) {
        sp[count - 1][search] = "*";
      }
      if (count < 4) {
        sp[count + 1][search] = "*";
      }
    }
  }
  count += 1;
}

for (let i of sp) {
  console.log(i);
}
