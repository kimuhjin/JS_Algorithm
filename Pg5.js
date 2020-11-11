/*
:: 코딩테스트 고득점 Kit ::
[해시] 위장
*/

function solution(clothes) {
    let answer =[]
    if (clothes.length===1){
        return 1
    }
    for (let i=0;i<clothes.length;i++)
    {
       for (let j=0; j<clothes.length; j++){
        if(clothes[i][1]!==clothes[j][1]){
            answer.push(clothes[j])
        }
       } 
    }
    // console.log(answer)
    let temp = []
    for (let k=0; k<clothes.length+1; k++){
        temp.push(String(answer[k]))
    }
    for (let l=0; l<temp.length; l++){
    for (let m=l+1; m<temp.length; m++){
        if(temp[l]===temp[m]){
            temp[l]=""
            temp[m]=""
            break;
        }
    }    
    }
    let num = temp.filter((v)=>v!=="")
    return num.length+clothes.length
}