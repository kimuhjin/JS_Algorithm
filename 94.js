/*
문제94 : 페이지 교체 - LRU 알고리즘

LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.
다음 그림을 참고해주세요.

메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.

만약 스택 안에 같은 스케줄이 있다면 **hit** 이라고 하며 실행시간은 **1초** 입니다. 스택 안에 스케줄이 없다면 **miss** 라고 하며 실행시간은 **6초** 입니다.

- 예제 1번을 보면 페이지 프레임의 개수는 3개이고 스케줄은 'BCBAEBCE' 입니다. 5번의 miss를 기록하므로 **5번 * 6초 = 30초**가 되고  3번의 hit을 기록하므로 **3번 * 1초 = 3초**입니다. 2개를 합한 값이 실행시간이므로, 33초가 됩니다.
*/

// 답안
function solution(frame, page) {
  let runTime = 0;
  let temp = [];
  if (frame === 0) {
    // frame이 0일 때, page의 크기만큼 6을 곱해주고 끝낸다.
    runTime = page.length * 6;
    return runTime;
  }
  for (let i of page) {
    if (temp.includes(i)) {
      // temp에 순회된 page[i]가 temp에 포함 되어있다면 runTime을 1 추가한다.
      runTime += 1;
      temp.push(temp.shift());
      // temp에 포함되어있다면, temp에 맨 앞에 있는것을 맨뒤에 추가한다.
    } else {
      // 배열이 비어있으면 무조건 넣어야 하므로 if문을 사용
      if (temp.length < frame) {
        // 현재 temp에 길이가 설정한 frame보다 작을경우, temp에 배열[i]를 넣는다
        temp.push(i);
      } else {
        // 만약 temp가 꽉 찼다면,
        // 가장 먼저 들어온 첫번째 배열을 제거하고 맨뒤에 입력값을 저장
        temp.shift();
        temp.push(i);
      }
      // if(temp.length < frame)문 실행에 상관없이 runTime은 6이 추가된다.
      runTime += 6;
    }
  }
  return runTime;
}
const f = 3;
const page = "BCBAEBCE".split("");
console.log(solution(f, page));

// BCBAEBCE;

// 페이지 = [B]; // 1번째, B, 6초
// 페이지 = [B, C]; // 2번째, C, 6초
// 페이지 = [C, B]; // 3번째, B, 1초
// 페이지 = [C, B, A]; // 4번째, A, 6초
// 페이지 = [B, A, E]; // 5번째, E, 6초
// 페이지 = [A, E, B]; // 6번째, B, 1초
// 페이지 = [E, B, C]; // 7번째, C, 6초
// 페이지 = [B, C, E]; // 8번째, E, 1초
