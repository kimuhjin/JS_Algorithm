// [재귀함수] 각 자릿수의 합

let result = "";
let x = "123123";
while (true) {
  if (x.length == 1) {
    result += ParseInt(x, 10); // result = "0" + result;
    break;
  }
  let y = x.split("");
  result += ParseInt(y.pop(), 10);
  x = y.join("");
}
console.log(result); // 12

function 문자열역순(문자) {
  if (문자.length == 1) {
    return ParseInt(문자, 10);
  }
  return (
    ParseInt(문자[문자.length - 1], 10) +
    문자열역순(문자.slice(0, 문자.length - 1))
  );
}
console.log(문자열역순("123123")); // 12
