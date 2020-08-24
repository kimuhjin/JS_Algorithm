// 문제52 : quick sort
// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
// function quickSort(arr){
//     if (arr.length <= 1){
//       return arr;
//     }
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
//     for (let i=1; i<arr.length; i++){
//       if(빈칸을 채워주세요){
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return /*빈칸을 채워주세요*/
//   }
//   const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
//   console.log(quickSort(array));

// 답안
// [1, 3, 2, 7, 5, 6, 4, 8, 9, 10]
// 기준값(pivot)을 설정한다.
// [1, 3, 2, 7, 5, 6, 4, 8, 9, 10]
// pivot값 5를 기준으로 위 배열에선 5번째 인덱스인 6을 기준으로,
// [1, 3, 2, 5, 4] + [6] + [7, 8, 9, 10]
// pivot값보다 작은 값은 값은 앞으로, 큰 값은 뒤로 보낸다.
// 위와 같이 앞 배열의 pivot을 배열의 중간값인 5/2 = 2번째 인덱스로 설정하여
// [1] + [2] + [3, 5, 4] + [6] + [7, 8, 9, 10]
// 뒤의 배열도 pivot을 중간값으로  4/2 = 2번째 인덱스로 설정하여,
// [1] + [2] + [3, 5, 4] + [6] + [7, 8] + [9] + [10]
// 1 + 2 + [3, 5, 4] + 6 + [7, 8] + 9 + 10
// 배열의 길이가 1이면 숫자로 리턴해준다.
// 1 + 2 + [3, 5, 4] + 6 + [7, 8] + 9 + 10
// [3, 5, 4]중 pivot은 3/2=1, 1번째 인덱스값인 5
// 1 + 2 +[3, 4] + [5] + 6 + [7, 8] + 9 +10
// [3, 4]중 pivot은 2/2=1, 1번째 인덱스값인 4
// [7, 8]중 pivot은 2/2=1, 1번째 인덱스값인 8
// 1 + 2 + [3] + [4] + [5] + 6 + [7] + [8] + 9 +10
// 마지막으로 위와 같이 배열의 길이가 1인 배열의 값들을 숫자로 리턴한다.
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 +10

// 답안
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
    // 배열의 길이가 1 혹은 1보다 작다면 바로 리턴한다.
  }
  const pivot = arr[0];
  // pivot을 배열 첫번째 값으로 설정하고,
  const left = [];
  const right = [];
  // 빈 left, right 배열을 설정한다.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
      // 만약 arr[i]값이 pivot(arr[0])값보다 작다면, left에 넣어주고,
    } else {
      right.push(arr[i]);
      // 만약 arr[i]값이 pivot(arr[0])값보다 크다면, right에 넣어준다.
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
  // 이렇게 sort된 left값과 pivot값, right값을 concat으로 이어 붙여준다.
  // quickSort()를 .concat하는 이유는 한 번만 재배치 하는게 아니라 끝까지 재배치해 맨 위에 if(arr.length<=1)문이 실행 될 때까지 쪼개야 되기 때문이다.
}
const array = [1, 3, 2, 7, 5, 6, 4, 8, 9, 10];
console.log(quickSort(array));
