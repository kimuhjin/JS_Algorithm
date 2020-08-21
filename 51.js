/*
문제51 : merge sort를 만들어보자

병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];
/*
  while (/*빈칸을 채워주세요 && 빈칸을 채워주세요)*/ /*{*/
/*if (/*빈칸을 채워주세요){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }*/
/*
    while (left.length) {
      /*빈칸을 채워주세요*/
/*}
    /*
    while (right.length) {
      /*빈칸을 채워주세요*/
/*}
    /*
    return result;
  }
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  console.log(mergeSort(array));
*/

/*
[1, 3, 5, 4, 8, 6, 7, 2]
// 배열이 있다면,
[1, 3, 5, 4], [8, 6, 7, 2]
// 배열을 반으로 나누고
[1, 3], [5, 4], [8, 6], [7, 2]
// 나눈 배열을 또 반으로 나누고
[1], [3], [5], [4], [8], [6], [7], [2]
// 더이상 나눠지지 않을 때까지 나눈다.
[1,3], [4,5], [6,8], [2,7]
// 나눈 배열을 두개씩 비교하여 다시 합친다.
[1, 3, 4, 5], [2, 6, 7, 8]
[1, 2, 3, 4, 5, 6, 7, 8]
 */

// 답안
// 분할 부분
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  // 배열이 6개라면 2로 나눠 3으로 mid를 설정하고
  const left = arr.slice(0, mid);
  // 0에서 3전까지
  const right = arr.slice(mid);
  // 3에서 6전까지
  return merge(mergeSort(left), mergeSort(right));
}
// 정렬하고 합치는 부분
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    // 오른쪽 과 왼쪽의 배열 길이가 1 이상일때 동작하고,
    if (left[0] < right[0]) {
      result.push(left.shift());
      // 만약 오른쪽의 첫번째 배열의 수가 더 크다면 왼쪽의 숫자를 result 배열에 추가하고,
    } else {
      result.push(right.shift());
      // 왼쪽의 첫번째 배열의 수가 더 크다면 왼쪽의 숫자를 result 배열에 추가한다.
    }
  }
  while (left.length) {
    result.push(left.shift());
    // 왼쪽 배열에 숫자가 남아있다면 왼쪽 배열을 result에 넣고
  }
  while (right.length) {
    result.push(right.shift());
    // 오른쪽 배열에 숫자가 남아있다면 오른쪽 배열을 result에 넣는다.
  }

  return result;
}

const array = "2 5 8 7 1 3".split(" ").map((n) => parseInt(n, 10));

console.log(mergeSort(array)); // 1 2 3 5 7 8
