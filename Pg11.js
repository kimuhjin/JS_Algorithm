console.clear();
function solution(gems) {
  const gemSets = [...new Set(gems)];
  let Combi = [];
  for (let i = 0; i < gems.length; i++) {
    for (let j = 0; j < gems.length + 1; j++) {
      Combi.push({ combi: [...gems].splice(i, j), location: [i+1, j-1] });
    }
  }
  let setOfCombi = [
    ...new Set(
      Combi.filter((v) => v.combi.length !== 0).map((v) => [
        v.combi,
        v.location.join(",")
      ])
    )
  ];
  // console.log(gemSets);
  console.log(setOfCombi);
  let result = [];
  for (let i = 0; i < setOfCombi.length; i++) {
    // if ([...new Set(setOfCombi)][i][0][k] === gemSets[j]) {}
    if (
      [...new Set(setOfCombi[i][0])].sort().join(",") ===
      gemSets.sort().join(",")
    ) {
      // console.log([...new Set(setOfCombi[i][0])].sort().join(","))
      result.push(setOfCombi[i][1]);
    }
  }
  // return result[0].split(",").map((v) => Number(v) + 1);
  console.log(result)
  return result.filter(
    (v) => Math.abs(Number(v[0]) - Number(v[2])) === gemSets.length
  )
  // .join("").split(",").map((v)=>Number(v)+1);
}
// 0,4
// const data = [
//   "DIA",
//   "RUBY",
//   "RUBY",
//   "DIA",
//   "DIA",
//   "EMERALD",
//   "SAPPHIRE",
//   "DIA"
// ];
const data = ["AA", "AB", "AC", "AA", "AC"];
// const data = ["XYZ", "XYZ", "XYZ"];

// [1, 3]
console.log(solution(data));
