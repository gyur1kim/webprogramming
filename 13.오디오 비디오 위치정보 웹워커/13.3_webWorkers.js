//워커 태스크, 스스로 실행되는 하나의 작업 단위
//워커 태스크는 브라우저 환경이 아니므로 window를 사용할 수 없다
let sum = 0;
for(let i = 0; i<10; i++){
    sum += i;
}

//메인 태스크와 워커 태스크는 오직 메시지를 이용해 통신한다.
postMessage(sum);

//반대로 메인 태스크에서 보낸 값을 알 수도 있음.
onmessage = function (e){
    let sum2 = 0;
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);
    for(let j=from; j<=to; j++){
        sum2 += j;
    }
    postMessage(sum2);
}