/*
문제82 : 수학 괄호 파싱

수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

**입출력 예시**

```jsx
데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 3 + 5
True

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7) * (3 * 5)
False
```

```jsx
function math(e){

    //코드를 작성해주세요

}

while (1){
    let order = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (order === 1){
        const ex = prompt('데이터를 입력하세요');
        console.log(math(ex));
    } else {
        break;
    }
}
```

문제83 : 수학 괄호 파싱 2

```
데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7 * {(3 * 5)}
True

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7){ * (3 * 5)
False

데이터 입력(1), 프로그램 종료(2) : 2
```

```jsx
function math(e){
		//코드를 작성해주세요
}

while (1){
    const order = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (order == '1'){
        const ex = input('데이터를 입력하세요');
        console.log(math(ex));
    } else {
        break;
    }
}
```
*/

// 내 답안
const input = "5 + 7 * {(3 * 5)}";
const ex = input.split("");
function math(ex) {
  let box = [];
  let box2 = [];
  for (let i of ex) {
    if (i === "(") {
      box.push(i);
    } else if (i === "{") {
      box2.push(i);
    } else if (i === ")") {
      box.push(i);
    } else if (i === "}") {
      box2.push(i);
    }
  }
  console.log(box);
  console.log(box2);
  let abcd = 0;
  let abc = 0;
  while (abcd < 100) {
    for (let i = 0; i < box.length; i++) {
      if (box[i] + box[i + 1] === "()") {
        box.splice(i, 2);
      }
    }
    abcd = abcd + 1;
  }
  while (abc < 100) {
    for (let i = 0; i < box2.length; i++) {
      if (box2[i] + box2[i + 1] === "{}") {
        box2.splice(i, 2);
      }
    }
    abc = abc + 1;
  }
  return box.length === 0 && box2.length === 0 ? true : false;
}
console.log(math(ex));

// 답안
function math(e) {
  const m = {
    ")": "(",
    "}": "{",
  };
  let stack = [];

  for (let i = 0; i < e.length; i++) {
    if (e[i].includes("(") || e[i].includes("{")) {
      stack.push(e[i]);
    } else if (m[e[i]]) {
      if (stack.length === 0) {
        return false;
      } else {
        let t = m[e[i]];
        if (t != stack.pop()) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}
