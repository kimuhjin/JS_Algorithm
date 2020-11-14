// 다리를 지나는 트럭
console.clear();
function solution(bridge_length, weight, truck_weights) {
  let startPoint = [...truck_weights];
  let onBridge = [];
  let finish = [];
  let resultTime = 0;
  let time = bridge_length;

  while (1) {
    let sum = onBridge.reduce((a, b) => a + b, 0);
    resultTime++;
    time--;
    if (sum <= weight) {
      onBridge.push(startPoint.shift());
    }
    if (time === 0) {
      finish.push(onBridge.shift());
      time = bridge_length;
    }
    if (finish.length === truck_weights.length) {
      break;
    }
  }

  return resultTime;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10];

// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridge_length, weight, truck_weights));
