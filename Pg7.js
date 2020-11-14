function solution(begin, target, words) {
    let answer = []
    let start = begin
    let count =0
    let aav = []
       for (let i =0; i<words.length; i++){
         aav.push("s")
         for (let j = 0; j<start.split("").length;j++){
           if(words[i].split("")[j] === start.split("")[j]){
             count = count + 1
            }
          }
         if(count > 1){
           start = words[i]
           break;
         }
       }
       console.log(start)
       console.log(aav)
    }
    const words = ["hot", "dot", "dog", "lot", "log", "cog"]
    const target = "cog"
    const begin = "hit"
    solution(begin, target, words)