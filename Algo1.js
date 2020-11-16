// 배을들중 중복된 값 찾기
function ss(arr) {
  const all = [...new Set(arr.flat())];
  console.log(all);
  let result = [];
  for (let i = 0; i < all.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[j].length; k++) {
        if ([...new Set(arr[j])][k] === all[i]) {
          count++;
        }
      }
    }
    if (count === 3) {
      result.push(all[i]);
    }
  }
  return result;
}
console.log(
  ss([
    [1, 2, 3, 5, 4, 0, 1, 14, 12],
    [1, 2, 3, 4, 5, 5, 14],
    [1, 2, 5, 4, 14]
  ])
);
