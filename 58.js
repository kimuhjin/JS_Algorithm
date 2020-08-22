/*
문제58 : 콤마 찍기

원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/

// 답안
// 답안 1 (메소드)
const n = prompt("숫자를 입력해주세요.");
parseInt(n, 10);

console.log(n.toLocaleString());

// 답안 2 (함수)
function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
    // 앞은 재귀함수를 사용해서 끝까지 3자리 단위로 나누어 주고, ","를 추가 한 뒤, 뒤에서 3자리를 붙여준다.
  }
}
console.log(comma("123456789"));
// "123456   ,789"
// "123      ,456      ,789"
