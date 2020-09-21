/*
Built-in Object

[Infinity]
console.log(Infinity) // Infinity
console.log(Infinity + 1) // Infinity
console.log(Infinity - 1) // Infinity
console.log(Infinity / 1) // Infinity
console.log(Infinity * 1) // Infinity
console.log(100 / 0) // Infinity
console.log(Math.pow(100,1000000)) // Infinity

[NaN]
Not a Number : 숫자가 아님을 나타냅니다.
console.log(NaN) // NaN
console.log(isNaN(NaN)) // true
console.log(isNaN(100)) // false

[undefined]
console.log(undefined) // undefined

let x;
console.log(x); // undefined

[null]
console.log(null) // null
console.log(null + 1) // 1

console.log(null == undefined) // true
console.log(null === undefined) // false

console.log(typeof(null)) // object
console.log(typeof(undefined)) // undefined

'==='는 자료형까지 같아야 true를 반환합니다.

[eval()]
문자열로 나타낸 자바스크립트의 명령문 또는 연산식을 실행합니다.
하지만 eval()은 사용하지 않는 것을 권고합니다.

console.log(eval('100 + 100')) // 200

let x = 10
let y = 20
console.log(eval('x + y)) // 30

[parseInt]
문자열을 해당 진수(10진수, 16진수)의 정수로 반환합니다.

console.log(ParseInt('100'), 10) // 100
'10'진수 '100'을 10진수로 변환하는것
console.log(ParseInt('100'), 16) // 256
'16'진수 '100'을 10진수로 변환하는것
console.log(ParseInt('100'), 8) // 64
'8'진수 '100'을 10진수로 변환하는것
console.log(ParseInt('100'), 2) // 4
'2'진수 '100'을 10진수로 변환하는것

console.log(ParseInt('100%abc'), 2) // 100
console.log(Number('100%abc')) // NaN
Number()는 인수를 숫자값으로 반환해주는데 이를 변환할 수 없으면 'NaN'를 반환합니다.

[parseFloat]
console.log(parseInt(5.8)) // 5.8
console.log(parseInt('5.8')) // 5.8
console.log(parseInt('5.8abcd')) // 5.8

[Array]
let arr = [1, 2, 3, 4]
console.log(arr) // [1, 2, 3, 4]
console.log(arr[0]) // 1

● concat()
let arr = ['사과', '배', '한라봉', '바나나']
let arrTwo = ['파인애플', '복숭아']
console.log(arr.concat(arrTwo))
// ['사과', '배', '한라봉', '바나나', '파인애플', '복숭아']



*/
