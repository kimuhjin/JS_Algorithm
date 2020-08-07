// 문제 9: concat을 활용한 출력 방법

// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = answer;
console.log(result); // 빈칸을 채워주세요

// 출력
// 2019/04/26 11:34:27

// 답안
var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);
//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
console.log(result); // 2019/04/26 11:34:27
