onmessage = (e)=>{
    let result = e.data[0] * e.data[1];
    if(isNaN(result)){
        postMessage("숫자를 입력해주세요");
    }
    else{
        postMessage(result);
    }
}