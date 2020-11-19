console.clear();
// d(n): sum of all proper divisors of n
// d(9): 1 + 3 = 4
// d(10): 1 + 2 + 5 = 8
// pair of a, b, a != b : d(a) = b && d(b) = a
// 1184, 1210
// d(1184) = 1 + 2 + 4 + 8 + ... = 1210
// d(1210) = 1 + 2 + 5 + 10 + ... = 1184

// d(n) : n의 약수 중 n 자신을 뺀 나머지 숫자들의 합

// Amicable pair

// 1. A != b
// 2. d(a) = b
// 3. d(b) = a

// 1184
// 1210

// d(1184) = 1210 => 2번
// d(1210) = 1184 => 3번

// findPairs(int n) => return n보다 작은 숫자중 모든 페어를 리턴하시오

function d(n) {
  let sum = [];
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      sum.push(i);
    }
  }
  return sum !== [] ? sum.reduce((a, b) => a + b, 0) : 0;
}
// console.log(d(1210));
function findPairs(n) {
  let arr = [];
  let result = [];
  for (let i = 0; i < n + 1; i++) {
    arr.push(i);
  }
  for (let j = 0; j < arr.length; j++) {
    if (d(d(arr[j])) === arr[j] && arr[j] !== d(arr[j])) {
      result.push([arr[j], d(arr[j])]);
    }
  }
  return result;
}
const num = 1210;
console.log(findPairs(num));
