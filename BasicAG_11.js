// 퀵정렬
// Worst - O(nlog2n), Best - O(n**2)

let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
let 정렬된배열 = [];

// [66, 77, 54, 32, 10, 5, 11, 15];

// 피봇값: 66
// [54, 43, 10, 5, 11, 15] + [66] + [77]

// 피봇값: 54
// [32, 10, 5, 11, 15] + [54] + [66] + [77]

// 피봇값: 32
// [10, 5, 11, 15] + [32] + [54] + [66] + [77]

// 피봇값: 10
// [5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

// 피봇값: 66
// [5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

function 퀵정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 피벗값 = [입력배열.shift()];
  let 그룹하나 = [];
  let 그룹둘 = [];
  for (let i in 입력배열) {
    if (입력배열[i] < 피벗값) {
      그룹하나.push(입력배열[i]);
    } else {
      그룹둘.push(입력배열[i]);
    }
  }
  return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

console.log(퀵정렬(입력값)); // [5, 10, 11, 15, 32, 54, 66, 77]
