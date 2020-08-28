/*
문제71,72 : 깊이 우선 탐색 & 너비 우선 탐색

**깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

**데이터**
graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}

**출력**
E D F A C B
*/

// 답안

const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop(); //.shift [너비 우선 탐색]
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
  return visited;
}
console.log(dfs(graph, "E"));

/* 깊이 우선 탐색
1. 시작인 E를 먼저 스택에 넣고, 스택의 배열길이가 0일 때까지 while문을 순회한다.
2. 스택의 맨 앞의 노드를 뽑아 n에 넣고
3. visited에 n이 없으면 n을 visited에 push하고
4. sub에 위 n에 있는 graph중 visited에 없는 것들을 집어 넣고
5. sub에 있는 노드들을 스택에 넣는다.
// 한번 돔
6. 스택에 들어가 있는 노드들중 앞에 있는 노드를 n에 넣고
7. 3~5 반복
8. 스택에 아무것도 없다면 visited를 리턴하며 함수를 종료한다.
*/
