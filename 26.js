// 문제26 : 행성 문제2
/*
우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

// 내 답안
const planet = prompt("행성을 입력하세요.");
switch (planet) {
  case "수성":
    console.log("Mercury");
    break;
  case "금성":
    console.log("Venus");
    break;
  case "지구":
    console.log("Earth");
    break;
  case "화성":
    console.log("Mars");
    break;
  case "목성":
    console.log("Jupiter");
    break;
  case "토성":
    console.log("Saturn");
    break;
  case "천왕성":
    console.log("Uranus");
    break;
  case "해왕성":
    console.log("Neptune");
    break;
  case "지구":
    console.log("Mercury");
    break;
  default:
    break;
}

// 답안
const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);
// planets.name과 같이 점 접근자로 접근할 경우 출력이 안 된다. planets.수성처럼 정확한 키값을 넣어줘야지 접근이 가능하다.
