/*
문제73 : 최단 경로 찾기

다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다.
두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.
이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.


**데이터**
graph = {'A': ['B', 'C'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F'],
         'D': ['B'],
         'E': ['B', 'F'],
         'F': ['C', 'E']}

**입력**
A F

**출력**
*/

// 답안

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
const user_input = ["A", "F"];
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

function solution() {
  let count = -1; // 초기값은 -1로 하고 while문에 들어가면서 +1 해준다.

  while (queue.length !== 0) {
    count += 1; // +1을 해줘 초기값을 0으로 만들어준다.

    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.splice(0, 1);
      if (node == end) {
        return count;
      }

      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}
console.log(solution());

// 1. while문이 처음 동작하면 +1을 해서 count을 0으로 맞춰준다.
// 2. start로 넣어준 노드 배열의 크기를 size에 넣고
// 3. 위 노드 배열의 크기 만큼 for문을 돌린다.
// 4. queue에 첫번째 배열을 node에 놓고 만약 node의 값과 end로 넣은 값이 같다면 count를 리턴해주고 끝난다.
// 5. 만약 end와 같지 않다면 graph에서 node에 있는 노드를 가져와 노드안에 있는 노드들을 for문을 순회하고
// 6. 만약 visited에 graph[노드]의 노드들이 없으면 해당 노드를 visited와 queue에 넣고 for문을 탈출한다.
// 7. node == end가 될 때까지 돌리면서 true가 된다면 count값을 리턴한다.

/*
  in은 순차적으로 값을 주고 of는 그안에 있는 요소들을 순회한다.

  let a = [10, 20, 30, 40];
  for (let i in a) {
    console.log(i); // 0 1 2 3 [인덱스 값]
  }
  for (let i of a) {
    console.log(i); // 10 20 30 40 [요소 값]
  }
  */
