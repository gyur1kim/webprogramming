let score;

onmessage = (e)=>{
    score = e.data;
    if(score<=100 && score>=90){
        postMessage(`${score} = A`);
    }
    else if(score<=89 && score>=80){
        postMessage(score + " = B");
    }
    else if(score<=79 && score>=70){
        postMessage(`${score} = C`);
    }
    else if(score<=69 && score>=60){
        postMessage(`${score} = D`);
    }
    else if(score<=59 && score>=0){
        postMessage(`${score} = F`);
    }
    else{
        postMessage("제대로 된 값을 입력해주세요");
    }
}