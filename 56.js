/*
문제56 : 객체의 함수 응용
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023
*/

// 답안
const nationWidth = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const w = nationWidth["korea"];
// korea 값을 w에 저장한다. 220877

delete nationWidth["korea"]; // 객체에서 키 삭제 (delete)

const entry = Object.entries(nationWidth);
// entries를 통해 객체를 배열로 바꿔준다.
// entry[0][0] ===> Russia
// entry[0][1] ===> 17098242

const values = Object.values(nationWidth);
// values에 nationWidth의 value값들을 배열형태로 저장

let gap = Math.max.apply(null, values);
// 비교할 값 저장
// Math.max 최댓값

let item = [];
for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - w)) {
    // Math.abs 절대값, 값의 차가 제일 큰것을 판단하기 위해 절댓값을 사용
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}
console.log(item[0], item[1] - w);
