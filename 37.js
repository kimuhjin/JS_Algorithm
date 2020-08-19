/*
문제37 : 반장 선거 

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.
*/

// 답안
const array = prompt("이름을 입력해주세요.").split(" ");
let result = {};
let winner = "";

for (let index in array) {
  let people = array[index];
  result[people] =
    result[people] === undefined ? 1 : (result[people] = result[people] + 1);
}
// for in문으로 배열을 순회하면서 people에 배열의 인덱스번호에 해당되는 값(후보 이름)을 저장하고, result 객체안에 키 값(후보이름)의 벨류값이 undefined이면 1, undefined가 아니라면 벨류값 + 1을 넣어준다.
// "원범 원범 혜원 혜원 혜원 혜원 유진 유진" ->
// {원범 : 2, 혜원 : 4, 유진 : 2}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});
//Object.keys를 통해 result의 모든 키값을 받아오고([혜원,원범,유진]),.reduce를 통해 해당 배열을 a,b로 비교 하면서 (a, b를 비교하고 true된 값, 여기선 result[a] 즉, result객체의 키값이 [이름]의 벨류 값(투표수)를 서로 비교 하면서 벨류가 높으면 그값을 반환하고 다음 값과 비교해서 벨류가 제일 높은 키를 반환한다.)

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
