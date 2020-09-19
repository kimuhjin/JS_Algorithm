// 최솟값과 최댓값 - reduce

let a = [6, 5, 4, 3, 2];
const reducerOne = (accumulator, currentvalue) => accumulator + currentvalue;
const reducerTwo = (accumulator, currentvalue) => accumulator - currentvalue;
const reducerThree = (accumulator, currentvalue) =>
  accumulator > currentvalue ? accumulator : currentvalue;
const reducerFour = (accumulator, currentvalue) =>
  accumulator > currentvalue ? accumulator : currentvalue;
console.log(a.reduce(reducerOne)); // 20
console.log(a.reduce(reducerTwo)); // -8
console.log(a.reduce(reducerThree)); // 6
console.log(a.reduce(reducerFour)); // 2
