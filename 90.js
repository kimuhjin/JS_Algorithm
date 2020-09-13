/*
같은 의약 성분을 찾아라!

의약품 성분이 총 8개인 약품들이 있습니다. 예를 들어 다음 데이터는 총 8개의 성분을 갖습니다.

판콜비 = 'ABCDEFGH'
넥타이레놀 = 'EFGHIJKL'

특정 약품 A의 성분이 공개되었을 때, 이와 유사한 성분을 가진 데이터들의 출력을 구하는 문제입니다.

입력 : 'ABCDEFGH' 4
데이터 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 1만 개의 데이터
출력 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 4개의 요소가 같은 약품 전부(4개 이상이 아니며 같은 요소가 4개인 것을 출력해야 합니다.)

* 해당 문제는 시간제한이 있습니다.
* 제약 데이터의 성분은 중복이 될 수 없습니다.
(예를 들어 'AAABBBAB'와 같은 데이터는 없습니다.)
*/

// 답안

let l = [];
for (let i = 65; i < 91; i++) {
  l.push(String.fromCharCode(i));
} // 65-91(A-Z)까지의 아스키코드값을 fromCharCode를 사용하여 알파벳으로 변환한다.

function randomItem(a) {
  let string = [];
  while (string.length !== 8) {
    //랜덤으로 받아온 문자열의 수가 8개가 될 때까지,
    let b = a[Math.floor(Math.random() * a.length)];
    // A-Z 알파벳을 무작위로 빼는데, a.length(알파벳 26개)를 Math.random에 곱해서,
    // (뒤에 곱해진수 미만으로 랜덤숫자가 나온다) 해당 알파벳을 추출한다.
    if (!string.includes(b)) {
      // 만약 위에서 뽑아온 알파벳이 string에 없으면,
      string.push(b);
      // 스트링에 push 한다.
    }
  }
  let medicine = string.join(""); // 위 string 배열을 string으로 만든다.
  return medicine;
}
let total_medicine = [];
while (total_medicine.length !== 100) {
  // 문자열이 100개가 될 때까지 돌린다.
  let m = randomItem(l);
  if (!total_medicine.includes(m)) {
    total_medicine.push(m);
  }
}
console.log(total_medicine);
let user_input = "ABCDEFGH 4".split(" ");
let result = [];
for (let i of total_medicine) {
  let setUserData = new Set(user_input[0]); //setUserData를 user_input의 문자열로 받는다.
  let setMedicine = new Set(i); // total_medicine
  let intersection = new Set(
    [...setUserData].filter((x) => setMedicine.has(x))
    // setUserData(ABCDEFGH)중 setmedicine에 포함이 된것들을 intersection에 넣는다.
    //  ABCE,DF...
  );
  if (intersection.size === parseInt(user_input[1], 10)) {
    // 포함 된 것들 중에 같은 문자가 user_input[1]개 (4개)인 것만 result에 push한다.
    result.push(i);
  }
}
console.log(result);
// math.floor(): 소수점 이하를 버림
// math.ceil(): 소수점 이하를  올림
// math.round(): 소수점 이하를 반올림
