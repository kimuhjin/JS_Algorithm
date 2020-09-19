// [재귀함수] 2진수 변환

// 2    11    1
// 2    5     1
// 2    2     0
//      1

let result = "";
let x = 11;
while (true) {
  if (x % 2 == 0) {
    result += "0"; // result = "0" + result;
  } else {
    result += "1";
  }
  x = Math.floor(x / 2);
  // Math.ceil()  : 소수점 올림
  // Math.floor() : 소수점 버림
  // Math.round() : 소수점 반올림
  if (x === 1 || x === 0) {
    result += String(x);
    break;
  }
}
console.log(result); //1101
console.log(result.split("").reverse().join("")); //1011

function 이진법(숫자) {
  if (x === 1 || x === 0) {
    return String(숫자);
  }
  return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
}
console.log(이진법(11));

// 이진법(11)    이진법(5) 101 + String(1)
// 이진법(5)     이진법(2) 10  + String(1)
// 이진법(2)     이진법(1) 1   + String(0)
// 이진법(1)     1
