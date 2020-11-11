/*
:: 코딩테스트 고득점 Kit ::
[해시] 베스트앨범
*/

function solution(genres, plays) {
    let add = [];
     let genres_n = [...new Set(genres)];
     let result = [];
     for (let i = 0; i < genres.length; i++) {
       add.push([genres[i], plays[i]]);
     }
     for (let k = 0; k < genres_n.length; k++) {
       let temp = 0;
       for (let j = 0; j < add.length; j++) {
         if (add[j][0] == genres[k]) {
           temp = add[j][1] + temp;
         }
       }
       result.push([genres_n[k], temp]);
     }
     let genres_sort = result.sort((a, b) => b[1] - a[1]);
     let results = [];

     for (let l = 0; l < genres_sort.length; l++) {
       results.push(
         add.filter((v) => v[0] === genres_sort[l][0]).sort((a, b) => b[1] - a[1])
       );
     }
     for (let m = 0; m < results.length; m++) {
       results[m] = results[m].splice(0, 2);
     }

     let final = [];
     let flat_r = results.flat().map((y) => y.join())
     let aa_r = add.map((v) => v.join())

     for (let z=0; z < flat_r.length; z++) {
       for (let s=0; s < aa_r.length; s++) {
         if(aa_r[s]===flat_r[z]){
           final.push(s)
         }
       }
     }
     return final
   }