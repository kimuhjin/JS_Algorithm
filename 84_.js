/*
문제84 : 숫자뽑기

소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다.
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23] 을 만들 수 있습니다.
이 중 가장 큰 수는 73입니다.

위 예시처럼 **어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수**를 찾아 주세요.
*/
// 답안
function solution(chars, length) {
  let result = [];
  const f = (pre, chars) => {
    for (let i = 0; i < chars.length; i++) {
      result.push(pre + chars[i]);
      f(pre + chars[i], chars.slice(i + 1));
    }
  };
  f("", chars);
  console.log(result);
  result = result.filter((i) => i.length === length);
  result.sort((a, b) => b - a);
  console.log(result);
  return result[0];
}
const num = "1723";
const len = 2;
console.log(solution(num, len));

// 내 답안 (x)
const input = "17234";
const num = input.split("");
console.log(num);
let arr = [];
for (let i = 0; i < num.length; i++) {
  for (let v = 0; v < num.length; v++) {
    if (num[i] !== num[v]) {
      arr.push(num[i] + num[v]);
    }
  }
}
console.log(arr);
const result = Math.max.apply(null, arr);
console.log(result);
