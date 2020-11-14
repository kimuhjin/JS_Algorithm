function solution(priorities, location) {
    let print = [];
    for (let i = 0; i < priorities.length; i++) {
      print.push([i, priorities[i]]);
    }
    let count = 100;
    let answer = [];
    let answers = 0;
    while (print.length !== 0) {
      answers++;
      let max_array = print.map((v) => (v = v[1]));
      let max = Math.max.apply(null, max_array);
      let check = print.shift();
      console.log(print);
      for (let i = 0; i < print.length; i++) {
        if (print[i][0] === location) {
          answer.push(answers);
        }
        if (print[i][1] === max) {
          print.slice(i, i + 1);
        }
        if (check[1] < print[i][1]) {
          print.push(check);
        }
      }
    }
    return answer.length - 1;
  }
  
  const priorities = [2, 1, 3, 2];
  const location = 2;
  console.log(solution(priorities, location));
  