// [재귀함수] 문자열 뒤집기

let result = "";
let x = "leehojun";
while (true) {
  if (x.length == 1) {
    result += x; // result = "0" + result;
    break;
  }
  let y = x.split("");
  result += String(y.pop());
  x = y.join("");
}
console.log(result); // nujoheel

function 문자열역순(문자) {
  if (문자.length == 1) {
    return 문자;
  }
  return 문자[문자.length - 1] + 문자열역순(문자.slice(0, 문자.length - 1));
}
console.log(문자열역순("leehojun")); // nujoheel

// 문자열역순('leehojun')    'n' + 문자열역순('leehoju')   -> nujoheel
// 문자열역순('leehoju')     'u' + 문자열역순('leehoj')    -> ujoheel
// 문자열역순('leehoj')      'j' + 문자열역순('leeho')     -> joheel
// 문자열역순('leeho')       'o' + 문자열역순('leeh')      -> oheel
// 문자열역순('leeh')        'h' + 문자열역순('lee')       -> heel
// 문자열역순('lee')         'e' + 문자열역순('le')        -> eel
// 문자열역순('le')          'e' + 문자열역순('l')         -> el
// 문자열역순('l')           'l'
