// 선택정렬

let a = [10, 11, 9, 2, 3, 6, 5, 4];
let 정렬된배열 = [];
for (let i = 0; i < 8; i++) {
  정렬된배열.push(Math.min.aplly(null, a));
  a.splice(a.indexOf(Math.min.aplly(null, a)), 1);
}
console.log(정렬된배열); // [2, 3, 4, 5, 6, 9, 11]
