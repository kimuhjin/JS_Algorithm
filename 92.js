/*
문제92 : 키보드 고장

P 회사의 회계를 처리하던 은정은 커피를 마시다가 키보드에 커피를 쏟고 말았습니다.
휴지로 닦고 말려보았지만 숫자 3, 4, 6이 도통 눌리지 않습니다.
10분 뒤, 모든 직원들에게 월급을 입금해 주어야 합니다.
여유 키보드는 없으며, 프로그래밍을 매우 잘하고, 모든 작업을 수작업으로 하고 있습니다.

이에 눌리지 않는 키보드를 누르지 않고 월급 입금을 두 번에 나눠주고 싶습니다.

1. 직원은 2000명이며, 3초 이내 수행을 해야합니다.
2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식으로 주어집니다.
3. 출력값의 형식은 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 입니다. 또는 '1,000,000', '2,000,000', 'S은행', '100-0000-0000-000' 도 괜찮습니다.

```
이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'
```
*/

// 답안
const 입력값 = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`;
// console.log()
let 나눠진입력값 = 입력값.split(`\n`);
let 숫자값 = [];
for (let i of 나눠진입력값) {
  let j = i.split(",");
  let k = j.slice(1, j.length - 2); // 10억 단위가 되면 ","이 하나 더 생기기 때문에 slice의 end값은 j.length-2로 한다.
  숫자값.push(k.join(""));
}
console.log(숫자값);
let 월급하나 = "";
let 월급둘 = "";
let result = [];
for (let 월급 of 숫자값) {
  console.log(월급); // 해당 월급들 : 5,000,000,3,200,000
  for (let 나뉜월급 of 월급) {
    console.log(나뉜월급); // 나뉜 월급들 ',5,0,0,0,0,0,0,'
    if (나뉜월급 !== "'") {
      // " ' " 문자가 아니라면 아래 코드를 실행하고,
      if (나뉜월급 === "3") {
        // 해당 문자가 3이라면
        월급하나 += "1"; // 월급하나에 "1"을 삽입하고 (문자에 문자를 추가, 숫자 더하기가 아님)
        월급둘 += "2"; // 월급둘에 "2"을 삽입한다.
      } else if (나뉜월급 === "4") {
        // 해당 문자가 4이라면
        월급하나 += "2"; // 월급하나에 "2"을 삽입하고 (문자에 문자를 추가, 숫자 더하기가 아님)
        월급둘 += "2"; // 월급둘에 "2"을 삽입한다.
      } else if (나뉜월급 === "6") {
        // 해당 문자가 6이라면
        월급하나 += "1"; // 월급하나에 "1"을 삽입하고 (문자에 문자를 추가, 숫자 더하기가 아님)
        월급둘 += "5"; // 월급둘에 "5"을 삽입한다.
      } else {
        // 3,4,6에 해당이 안 된다면,
        월급하나 += 나뉜월급; // 해당 순회된 나뉜월급을 월급하나에 넣고
        월급둘 += 0; // 월급둘엔 0을 넣는다.
      }
    }
  }
  result.push([parseInt(월급하나, 10), parseInt(월급둘, 10)]); // 숫자로 변환해서 배열에 넣어서 result에 저장한다.
  // parseInt를 하면 '0200000'을 200000으로 변환한다.
  월급하나 = "";
  월급둘 = "";
  // 한번 씩 돌 때 마다 리셋한다.
}
console.log(result);

// 내 답안 (x)

let pay = [5000000, 3200000, 3300000, 5300000, 333356766];
let result = [];
for (let v of pay) {
  console.log(v);
  let temp = [];
  for (let i = 1; i < 10000; i++) {
    let calc = String(v / i);
    let rightpay = calc.split("");
    let leftpay = String(v - rightpay.join("")).split("");
    if (
      !rightpay.includes("3") &&
      !rightpay.includes("4") &&
      !rightpay.includes("5") &&
      !leftpay.includes("3") &&
      !leftpay.includes("4") &&
      !leftpay.includes("6") &&
      Number(rightpay.join("")) > 0 &&
      Number(leftpay.join("")) > 0
    ) {
      if (temp.length === 0) {
        temp.push(Number(rightpay.join("")), Number(leftpay.join("")));
        console.log(Number(rightpay.join("")), Number(leftpay.join("")));
      }
    }
  }
  result.push(temp);
}
console.log(result);
