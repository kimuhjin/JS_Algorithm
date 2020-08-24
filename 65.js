/*
문제65 : 변형된 리스트

a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

// 내 답안
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let result = [];
for (let i in a) {
  if ((Number(i) + 1) % 2 !== 0) {
    // i(index)값이 string으로 들어온다.
    result.push([a[i], b[i]]);
  }
  if ((Number(i) + 1) % 2 === 0) {
    result.push([b[i], a[i]]);
  }
}
console.log(result); //[[1,'a'],['b',2],[3,'c'],['d',4]]

// 답안
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let c = a.forEach(function (e, i) {
  if (i % 2 === 0) {
    c.push([e, b[i]]);
  } else {
    c.push([b[i], e]);
  }
});
console.log(c);

a.map(function (e, i) {
  if (i % 2 === 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});
//forEach는 리턴값이 undefined이므로 push 해준다.
//map은 return 으로 값을 넘겨줄수 있다.
