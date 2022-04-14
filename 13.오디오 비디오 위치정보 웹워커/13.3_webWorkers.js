//워커 태스크, 스스로 실행되는 하나의 작업 단위
let sum = 0;
for(let i = 0; i<10; i++){
    sum += i;
}
postMessage(sum);