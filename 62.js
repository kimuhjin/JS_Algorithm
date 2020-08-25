/*
문제62 : 20190923출력하기

`20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/

// 내 답안

const insert = "qqerrrrrrrrryyyyyyyyyuuiii".split("");
console.log(insert);
const compare = "qwertyui".split("");
console.log(compare);
let result = [];
for (let index in compare) {
  let count = 0; // 숫자를 쓰면 안된다...
  for (let i in insert) {
    if (compare[index] === insert[i]) {
      count = count + 1;
    }
  }
  result.push(count);
}
console.log(result.join(""));

// 답안

const user_s = "aacdddddddddfffffffffgghhh";
let result_s = "";
console.log(
  `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
    user_s.match(/c/g).length
  }${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
    user_s.match(/f/g).length
  }${user_s.match(/g/g).length}${user_s.match(/h/g).length}`
);
// user_s에서 match를통해 a를 g(global)전체에서 찾고, 그 수를 .length로 표시한다.
// null인경우 Number()로 강제 형변환을 한다.
// 정규표현식(정규식) : 정규식은 문자열에 포함된 문자 조합을 찾기 위해 사용되는 패턴이다.