/*
문제86 : 회전 초밥

쉔은 회전 초밥집에 갔습니다.
초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.

1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
3. 초밥은 1개 이상 존재합니다.

예)
A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 .
A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다. 
즉, A B C D E **C** 의 순서로, 접시가 5번 지나가고 먹게 된다.

```jsx

**입력**
point = [1,1,3,2,5]
dish = 3

**출력**
5

**입력**
point = [5,2,3,1,2,5]
dish = 1

**출력**
10

//point 각 접시별 점수가 들어있는 배열
//dish 먹고자하는 접시의 위치
```
*/

// 답안
const point = [5, 2, 3, 1, 2, 5];
const dish = 1;
const solution = (point, dish) => {
  let answer = 0; // 순회 횟수
  dish -= 1; // dish의 index값은 dish.index - 1이기 때문에 1을 빼준다.
  let s = point.slice(); // s에 point 배열을 복사 해준다.
  s.sort((a, b) => {
    return a - b;
  }); // s를 오름차순으로 정렬한다.
  while (true) {
    let p = point.shift(); // point의 맨 앞의 원소를 p에 넣고
    if (s[0] === p) {
      // 만약 s의 첫번째 원소가 point의 첫번째 원소와 같고,
      if (dish === 0) {
        // dish가 0 이라면 break
        break;
      }
      dish -= 1; // dish를 -1해주고,
      s.shift(); // s의 첫번째 원소를 삭제한다.
    } else {
      // 만약 s의 첫번째 원소가 point의 첫번째 원소와 다르다면,
      point.push(p); // point에 위에서 빼온 첫번째 원소를 point 맨 뒤에 push하고,
      if (dish === 0) {
        // 만약 dish가 0이라면
        dish = point.length - 1; // dish를 point의 전체길이 - 1한 값을 넣어준다. (마지막 원소의 index값)
      } else {
        dish -= 1; // dish가 0이 아니라면, dish값에 1을 빼준다.
      }
    }
    answer += 1; //while문이 한 번씩 돌 때마다 answer이 1 증가한다.
  }

  return answer;
};
console.log(solution(point, dish));
