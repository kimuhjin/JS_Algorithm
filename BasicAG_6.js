// 최솟값과 최댓값 구하기

let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];
a.sort();
console.log(a[0]); // 1
console.log(a[a.length - 1]); // 9
console.log(a); // [1, 10, 11, 2, 20, 3, 30, 5, 9]
// 자바스크립트는 사전식정렬이라 1 다음 10이 나오게 된다.
console.log(Math.max(a)); // error!
console.log(Math.max.apply(null, a)); // 30
// 배열중 가장 큰 값을 리턴하려면 .apply를 붙이고 첫 번째 인자에 null, 두 번째 인자에 해당 배열을 넣어야 한다.
console.log(Math.min.apply(null, a)); // 1

let m = 0;
for (let variable of a) {
  if (variable > m) {
    m = variable;
  }
}
console.log(m); // 30

let m = 999; // or m = a[0] // 어느값이 들어가도 최솟값을 찾을 수 있다.
for (let variable of a) {
  if (variable < m) {
    m = variable;
  }
}
console.log(m); // 1
