/*
문제95 : 도장찍기

빈 종이에 stamp 모양으로 생긴 도장을 90*k 도로 회전하며 찍습니다.
도장은 N*N 크기이며 각 도장이 찍히는 부분은 1 이상의 자연수와 도장이 찍히지 않는 0으로 이루어져 있습니다.

도장의 크기 N과,
종이에 찍힌 도장 횟수를 표현한 stmp 배열과,
얼만큼 회전할 것인지를 알려주는 회전수 k를 입력받았을 때
각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하세요

입력

도장 = [
[1,1,1,2],
[2,0,0,0],
[1,1,1,1],
[0,0,0,0]]

회전 = 1


출력

[[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]
*/

// 내 답안
function solution(stamp, rot) {
  let rotate = rot < 4 ? rot : rot % 4;
  const oneA = stamp
    .join()
    .split(",")
    .map((v) => parseInt(v, 10));
  let temp = [];
  let result = [];
  if (rotate === 0) {
    temp = oneA;
  }
  if (rotate === 1) {
    for (let i = 0; i < stamp.length; i++) {
      for (let v = stamp.length - 1; v > -1; v--) {
        temp.push(stamp[v][i]);
      }
    }
  }
  if (rotate === 2) {
    for (let i = stamp.length - 1; i > -1; i--) {
      // console.log(stamp[i][3]);
      for (let v = 3; v > -1; v--) {
        // console.log(stamp[i][v])
        temp.push(stamp[i][v]);
        // console.log(v);
      }
    }
  }
  if (rotate === 3) {
    for (let i = 3; i > -1; i--) {
      for (let v = 0; v < stamp.length; v++) {
        temp.push(stamp[v][i]);
      }
    }
  }
  for (let i = 0; i < oneA.length; i++) {
    result.push(temp[i] + oneA[i]);
  }
  console.log(oneA);
  console.log(temp);
  let aa = [];
  let bb = result;
  for (let i = 0; i < oneA.length / stamp.length; i++) {
    aa.push(bb.splice(0, oneA.length / stamp.length));
  }
  return aa;
}
const 도장 = [
  [1, 1, 1, 2],
  [2, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];
const 회전 = 5;
console.log(solution(도장, 회전));
