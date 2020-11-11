/*
:: 코딩테스트 고득점 Kit ::
[해시] 완주하지 못한 선수

문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
입출력 예
participant	                                      completion	                        return
[leo, kiki, eden]	                              [eden, kiki]	                        leo
[marina, josipa, nikola, vinko, filipa]	          [josipa, filipa, marina, nikola]	    vinko
[mislav, stanko, mislav, ana]	                  [stanko, ana, mislav]	                mislav

입출력 예 설명
예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

*/

// 답안
function solution(participant, completion) {
  participant.sort(); // participant 배열을 abc순으로 정렬한다.
  completion.sort(); // completion 배열을 abc순으로 정렬한다.
  for (let i = 0; i < participant.length; i++) {
    // participant 배열 길이만큼 순회를 하면서
    // i를 0부터 1씩 증가하며,
    if (participant[i] !== completion[i]) {
      // participant i번째 배열과 completion i번째 배열이 같지 않다면
      return participant[i]; // 해당 벨류를 리턴한다.
    }
  }
}

// 1. const participant = ["leo", "kiki", "eden"];
// 2. const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// 3. const participant = ["mislav", "stanko", "mislav", "ana"];

// 1. const completion = ["eden", "kiki"];
// 2. const completion = ["josipa", "filipa", "marina", "nikola"];
// 3. const completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));
