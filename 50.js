/*
문제50 : 버블정렬 구현하기
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
*/
/*
function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
      for
      /*
      빈칸을 채워주세요.
      */
/*
      {
        if (result[j] > result[j + 1]) {
           //빈칸을 채워주세요.
        }
      }
    }
    return result;
  }

  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });

  console.log(bubble(items));
*/

// 답안
function bubble(arr) {
  let result = arr.slice();
  // bubble(item) 으로 받아온 배열을 .slice()를 사용해 result로 복사해온다.
  for (let i = 0; i < result.length - 1; i++) {
    // 배열에 아이템이 5개라면 맨 마지막은 고정이 되기 때문에 4번만 순회해도 돼서 result.length에 -1을 한다.
    for (let j = 0; j < result.length - i; j++) {
      // 배열의 마지막부터 순차적으로 고정 되기 때문에 result.length에 -i를 한다.
      if (result[j] > result[j + 1]) {
        let value = result[j];
        // 타겟팅된 인덱스의 값을 value에 저장하고,
        result[j] = result[j + 1];
        // if문처럼 앞에 인덱스 값(j번째)이 뒤에 인덱스값(j+1번째)보다 크면 뒤의 값을 앞에 저장하고,
        result[j + 1] = value;
        // 앞의 값을 뒤의 값에 넣는다.
      }
    }
  }
  return result;
}
const items = "5 4 7 9 1 3".split(" ").map((n) => {
  return parseInt(n, 10);
});
console.log(bubble(items));
