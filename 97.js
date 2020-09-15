/*
문제97 : 택배 배달

n 명의 택배 배달원은 쌓인 택배를 배달해야 합니다.
각 택배는 접수된 순서로 배달이 되며 택배마다 거리가 주어집니다. 
거리1당 1의 시간이 걸린다고 가정하였을 때 모든 택배가 배달 완료될 시간을 구하세요.

1. 모든 택배의 배송 시간 1 이상이며 배달지에 도착하고 돌아오는 왕복 시간입니다.
2. 택배는 물류창고에서 출발합니다.
3. 배달을 완료하면 다시 물류창고로 돌아가 택배를 받습니다.
4. 물류창고로 돌아가 택배를 받으면 배달을 시작합니다.
5. 택배를 상차할 때 시간은 걸리지 않습니다.

입력은 배달원의 수와 택배를 배달하는 배달 시간이 주어집니다.

ex) 배달원이 3명이고 각 거리가 [1,2,1,3,3,3]인 순서로 들어오는 경우

function solution(n,l){
	//코드 작성
}

const 배달원 = 3;
const 배달시간 = [1,2,1,3,3,3];

console.log(solution(배달원, 배달시간));
// 출력값 = 5
*/

// 답안
function solution(n, l) {
  let answer = 0;
  let man = Array(n).fill(0);
  console.log(man);
  while (l.length !== 0) {
    for (let j = 0; j < man.length; j++) {
      if (man[j] === 0 && l) {
        man[j] = l.shift(); // l 맨앞에있는 항목을 빼면서 man[j]에 저장
      }
    }
    man = man.map((x) => x - 1); // while문이 한 번 돌 때마다 map()을 통해 man 배열의 원소들 1씩 감소.
    console.log(man);
    answer += 1; // while문이 돌 때마다 answer 1씩 증가.
  }
  return answer + Math.max.apply(null, man);
  // 남아있는 배열, [1,2,1]중 가장 큰 값인 2를 더해준다.
}
const 배달원 = 3;
const 배달시간 = [1, 2, 1, 3, 3, 3];
console.log(solution(배달원, 배달시간));
