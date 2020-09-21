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

● 배열에 항목 추가 및 제거 하기
- push() : 배열 끝에 항목 추가
- pop() : 배열 끝에 항목 제거
- unshift() : 배열 앞에 항목 추가
- shift() : 배열 앞에 항목 제거

let arr = ['사과', '배', '한라봉', '바나나']

console.log(arr.push('파인애플')) // 5
console.log(arr) // ['사과', '배', '한라봉', '바나나', '파인애플']

console.log(arr.pop()) // '파인애플'
console.log(arr) // ['사과', '배', '한라봉', '바나나']

console.log(arr.unshift('감귤')) // 5
console.log(arr) // ['감귤', '사과', '배', '한라봉', '바나나']

console.log(arr.shift()) // 5
console.log(arr) // ['사과', '배', '한라봉', '바나나']

● splice() : 요소를 삭제하거나 교체합니다.

let arr = ['사과', '배', '한라봉', '바나나']

console.log(arr.splice(2, 1, '레드향')) // 한라봉
console.log(arr) // ['사과', '배', '레드향', '바나나']

console.log(arr.splice(1, 0, '파인애플')) // []
console.log(arr) // ['사과', '파인애플', '배', '레드향', '바나나']

● slice() : 요소를 인덱스 기준으로 잘라냅니다.

let arr = [3, 4, 2, 6, 9, 1]

// 2부터 6-1까지의 요소를 새로운 배열로 반환합니다.
console.log(arr.slice(2, 6)) // [2, 6 ,9, 1]
console.log(arr) // [3, 4, 2, 6 ,9, 1]

● length : 배열의 길이를 반환합니다.

let arr = [1, 2, 3, 4, 5]
console.log(arr.length) // 5

● fill() : 해당 값으로 배열을 채웁니다.

let arr = [1, 2, 3, 4, 5]

console.log(arr.fill(0)) // [0, 0, 0, 0, 0]
console.log(arr.fill(1, 1, 3)) // [0, 1, 1, 0, 0]
console.log(arr.fill(5, 2)) // [0, 1, 5, 5, 5]

● filter() : 조건을 만족하는 항목들만 배열로 반환합니다.

let score = [40, 80, 75, 90, 35, 81]
let message = ['홍길동', '홍홍길동', '홍', '홍홍홍길동', '길동이']

console.log(score.filter(x => x > 8)) // [80, 90, 81]
console.log(message.filter(x => x.length > 3)) // ['홍길동', '길동이']

● flat()

let matrix = [1, 2, 3, [1, 2, 3, [10, 20]]]

console.log(matrix.flat()) // [1, 2, 3, [1, 2, 3, 10, 20]]
console.log(matrix.flat(2)) // [1, 2, 3, 1, 2, 3, 10, 20]

● includes() : 배열이 특정 항목을 포함하고 있는지 확인합니다.

let fruits = ['사과', '배', '한라봉', '바나나']

fruits.includes('사과') // true
fruits.includes('복숭아') // false

● join() : 배열의 항목들은 특정 값으로 이어붙입니다.

let arr = [1, 2, 3, 4, 5]
console.log(arr.join('!')) // 1!2!3!4!5
console.log(arr.join('-')) // 1-2-3-4-5

● map() : 배열의 순회하며 함수를 실행한 결과로 새로운 배열을 만들어 반환합니다.

let arr = [1, 2, 3, 4, 5]
let arrTwo = ['1', '2', '3', '4', '5']

function coding(x){
    return x**2
}
console.log(arr.map(coding)) // [1, 4, 9, 16, 25]
console.log(arr.map(x => parseInt(x, 10))) // [1, 2, 3, 4, 5]

● sort() : 배열을 정렬 후 그 배열을 반환합니다.

let arr = [1, 2, 100, 10, 222, 3]

// sort()는 유니코드에 따라 정렬합니다.
console.log(arr.sort()) // [1, 10, 100, 2, 222, 3]

// 배열 score를 오름차순으로 정렬하기
let score = [40, 80, 75, 90, 35, 81]

score.sort((a, b) => {
    return a - b
})

console.log(score) // [35, 40, 75, 80, 81, 90]
// 내림차순으로 정렬을 하고 싶다면 'return b - a'로 변경해주시면 됩니다.

● reverse() : 배열을 역순으로 정렬한 후 그 배열을 반환합니다.

let arr = [1, 2, 3, 4, 5]

console.log(arr.reverse()) // [5, 4, 3, 2, 1]

[Set]
중복값을 제외한 유일한 값을 저장합니다.

let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5]
let s = new Set(arr)

console.log(s) // {1, 2, 3, 4, 5}

// Set의 크기는 length가 아닌 size를 통해 구할 수 있습니다.
console.log(s.size) // 5
console.log(s.length) // undefined

// has() : 특정 값을 가지고 있는지 확인합니다.

● size : 값의 개수를 반환합니다.

let s = new Set([1, 2, 3, 4, 5])

// Set의 크기는 length가 아닌 size를 통해 구할 수 있습니다.
console.log(s.size) // 5
console.log(s.length) // 5

● add() : 새로운 요소를 추가합니다.
● delete() : 해당 요소를 삭제합니다.
● has() : 특정 값을 가지고 있는지 확인합니다.
● clear() : 모든 요소를 제거합니다.

let s = new Set([1, 2, 3, 4, 5])

console.log(s.has(7)) // false

console.log(s.add(7)) // {1, 2, 3, 4, 5, 7}
console.log(s.has(7)) // true

s.delete(7)
console.log(s) // {1, 2, 3, 4, 5}
console.log(s.has(7)) // false

s.clear()
console.log(s) // {}

[Map]
key와 value를 같이 저장하는 객체입니다.
● set() : Map 객체에 key와 value를 넣고 그 객체를 반환합니다. (값 설정하기)

let m = new Map()

m.set('하나', 'one')
m.set('둘', 'two')
m.set('셋', 'three')

console.log(m)
// {"하나" => "one", "둘" => "two", "셋" => "three"}

● get() : 주어진 키에 해당하는 벨류를 반환합니다.

let m = new Map()
m.set('이름', 'name')

console.log(m.get('이름')) // name

● has() : 객체 내 주어진 '키'의 값이 있는지 확인하고 Boolean 값을 반환합니다.

let m = new Map

m.set('수학점수', 90)

console.log(m.has('수학점수')) // true
console.log(m.has(90)) // false

● for-of문을 통해 순회하기

let score = new Map()

m.set('국어',90)
m.set('수학',85)
m.set('영어',70)

for (let [key, value] of score){
    console.log(`${key} : ${value}`)
}
// 국어 : 90
// 수학 : 85
// 영어 : 70

for (let i of score){
    console.log(i)
}
// [국어, 90]
// [수학, 85]
// [영어, 70]

[String]

let str = 2;
let strTwo = 'two';
let strThree = '둘';

console.log(strTwo) // 'two'
console.log(strThree) // '둘'

템플릿 리터럴
console.log(`${str}는 ${strTwo}이고 ${strThree}이다.`)
// 2는 two이고 둘이다.

● 이스케이프 문자

\n : Enter(개행)
\t : 탭
\v : 세로 탭
\' : 작은따옴표
\" : 큰따옴표
\\ : 역슬래시

● concat()

let str = 'welcome to'

console.log(str.concat('coding class'))
// 'welcome to coding class'

● includes()

let str = 'abc abcd abcde ab cd def'

console.log(str.includes('abc')) // true
console.log(str.includes('fgh')) // false

● split() : 문자열을 지정된 구분자로 나눈 후 배열로 반환합니다.

let str = '복잡한 세상 편하게 살자'

console.log(str.split(' ')) // ['복잡한', '세상', '편하게', '살자']

● replace() : 특정 패턴에 일치하는 문자열을 교체할 수 있습니다.

let str = 'abc abcd abcde ab cd def'

console.log(str.replace('abc', '!')) // ! abcd abcde ab cd def

// 정규 표현식을 사용하여 전역으로 교체하기
console.log(str.replace(/abc/g, '!')) // ! !d !de ab cd def
console.log(str.replace(/ /g, '-')) // abc-abcd-abcde-ab-cd-def

● slice() : 인덱스를 기주으로 문자열을 잘라내 반환합니다.
● indexOf() : 주어진 문자열과 첫번째로 만나는 문자열의 인덱스를 반환합니다.

let str = '눈떠보니 코딩 테스트 전날'

console.log(str.indexOf('코딩 테스트')) // 5
console.log(str.slice(5, 11)) // 코딩 테스트

● match() : 문자열에서 정규식과 매치되는 부분을 검색하고 배열로 반환합니다.

let str = 'abc abcd abcde ab cd def ABC'
let re = /abc/gi
// 전역에서 대소문자 구별하지 않고 찾겠다!
g : global
i : 대소문자 모두

console.log(str.match(re)) // ["abc", "abc", "abc", "ABC"]

● toLowerCase() / toUpperCase() : 대소문자로 변환합니다.

let str = "abcABCdeFg"

console.log(str.toLowerCase()) // abcabcdefg
console.log(str.toUpperCase()) // ABCABCDEFG

// 대소문자인지 판별하기
let str = 'apple'

if(str == str.toLowerCase()){
    console.log('소문자가 맞습니다.')
} else{
    console.log('대문자입니다.')
}

[for / for in / for of / forEach]

// 배열의 모든 원소의 합 구하기
let arr = [1, 2, 3, ..., 9, 10]
let result = 0

// 1. for
for (let i=0; i<arr.length; i++){
    result += arr[i]
}

// 2. for in
for (let i in arr){
    result += arr[i]
}

// 3. for of
for (let i of arr){
    result += i
}

// 4. forEach - 오직 'Array 객체'에서만 사용이 가능합니다.
arr.forEach(x => {
    result += x
})

[Math 메서드]

● Math.abs() : 절대값을 반환

● Math.cbrt() : 세제곱근을 반환 (cbrt = cube root)

● Math.ceil() : 크거나 같은 수 중 가장 작은 정수를 반환. 소수점을 무조건 올림
console.log(Math.ceil(7.001)) // 8

● Math.floor() : 작거나 같은 수 중 가장 큰 정수를 반환. 소수점을 무조건 내림
console.log(Math.floor(7.999)) // 7

● Math.round() : 가장 가까운 정수를 반환.
console.log(Math.round(3.5)) // 4
console.log(Math.round(3.499)) // 3

● Math.max() : 가장 큰 수를 반환
console.log(Math.max(1,2,3)) // 3

let a = [1, 2, 3];
console.log(Math.max.apply(null,a)); // 3
배열에 적용하려면 Math.max.apply(null,a)와 같이 사용해야 된다.

● Math.min() : 가장 작은 수를 반환

● Math.pow(x, y) : x의 y 제곱을 반환

● Math.random() : 0과 1 사이의 난수를 반환
console.log(Math.ceil(Math.random() * 3)) // 1~3 범위의 난수
console.log(Math.round(Math.random() * 3)) // 0~3 범위의 난수
console.log(Math.floor(Math.random() * 3)) // 0~2 범위의 난수
*/
