// [카카오 인턴] 수식 최대화

function solution(expression) {
  const wayFilter = [
    ...new Set(
      expression.split("").filter((v) => v === "*" || v === "-" || v === "+")
    )
  ].length;
  const way1 = [["+"], ["-"], ["*"]];
  const way2 = [
    ["+", "-"],
    ["+", "*"],
    ["*", "+"],
    ["*", "-"],
    ["-", "*"],
    ["-", "+"]
  ];
  const way3 = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "+", "*"],
    ["-", "*", "+"]
  ];
  let way = [];
  if (wayFilter === 1) {
    console.log("way1");
    way = way1;
  }
  if (wayFilter === 2) {
    console.log("way2");
    way = way2;
  }
  if (wayFilter === 3) {
    console.log("way3");
    way = way3;
  }
  const mathExp = expression.split("");
  for (let i = 0; i < mathExp.length; i++) {
    if (mathExp[i] === "-" || mathExp[i] === "*" || mathExp[i] === "+") {
      mathExp[i] = [",", mathExp[i], ","];
    }
  }
  const mathCon = mathExp.flat().join("").split(",");
  let result = [];
  while (way.length !== 0) {
    let exp = way.shift();
    for (let i = 0; i < exp.length; i++) {
      let temp = mathCon;
      let value = 0;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] === exp[i]) {
          temp[j] = String(eval([temp[j - 1], temp[j], temp[j + 1]].join("")));
          temp.splice(j - 1, 1);
          temp.splice(j, 1);
          let calc = temp.filter((v) => v !== " ");
          temp = calc;
        }
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === "-" && Number(temp[i + 1]) < 0) {
            temp.splice(i, 1);
            temp[i] = `+${Math.abs(Number(temp[i]))}`;
          }
        }
        value = Math.abs(eval(temp.join("")));
        // console.log(value)
      }
      result.push(value);
    }
  }
  return Math.max.apply(null, result);
}

const expression = "100-200*300-500+20";
console.log(solution(expression));
