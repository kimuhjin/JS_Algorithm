// 병합정렬
// 병합정렬은 O(nLogn)으로 어느 정렬보다 빠르다. 다른 정렬들은 O(2^n)이다.
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
let 정렬된배열 = [];

// 분할
// [5, 10, 66, 77], [54, 32, 11, 15]
// [5, 10], [66, 77], [54, 32], [11, 15]
// [5], [10], [66], [77], [54], [32], [11], [15]

// 정복
// [5, 10], [66, 77], [32, 54], [11, 15]
// [5, 10], [66, 77], [32, 54], [11, 15]

// [], [], [32, 54], [11, 15]
// [5, 10, 66 ,77], [11, 15, 32, 54]
// [5, 10, 11 ,15, 32, 54, 66, 77]

function 병합정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;
  let 결과값 = [];
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 중간값 = parseInt(입력배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));
  while (그룹하나.length != 0 && 그룹둘.length != 0) {
    if (그룹하나[0] < 그룹둘[0]) {
      결과값.push(그룹하나.shift());
    } else {
      결과값.push(그룹둘.shift());
    }
  }
  while (그룹하나.length != 0) {
    결과값.push(그룹하나.shift());
  }
  while (그룹둘.length != 0) {
    결과값.push(그룹둘.shift());
  }

  return 결과값; // [5, 10, 11, 15, 32, 54, 66, 77]
}
