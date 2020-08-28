/*
문제75 : 이상한 369

369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

입력
'93'

출력
10
*/

// 내 답안
const input = 93;
const Logic = (input) => {
  let result = [];
  let n = [];
  let abc = [];
  let answer = [];
  for (let i = 1; i < input + 1; i++) {
    let num = String(i).split("");
    result.push(num);
  }
  for (let i of result) {
    let a = [];
    if (i.length === 1) {
      for (let v of i) {
        if (v === "3" || v === "6" || v === "9") {
          a.push(2);
        } else {
          a.push(0);
        }
      }
    }
    if (i.length > 1) {
      for (let v of i) {
        if (v === "3" || v === "6" || v === "9") {
          a.push(1);
        } else {
          a.push(0);
        }
      }
    }
    n.push(a);
  }
  for (let v of n) {
    let count = 0;
    for (let p of v) {
      if (p === 1) {
        count = count + 1;
      }
      if (p === 2) {
        count = count + 2;
      }
      abc.push(count);
    }
  }

  for (let q of abc) {
    if (q > 1) {
      answer.push("good");
    }
  }
  return answer.length;
};
console.log(Logic(input));

// 답안
function sol(n) {
  let answer = 0;
  let count = 1;
  const d = { 3: 1, 6: 2, 9: 3 };
  while (n.length !== 0) {
    answer += d[parseInt(n.pop(), 10)] * count;
    count *= 3;
  }
  return answer;
}
const user_input = new String(prompt("입력해주세요")).split("");
console.log(sol(user_input));
