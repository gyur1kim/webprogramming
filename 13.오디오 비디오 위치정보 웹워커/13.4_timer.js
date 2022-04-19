let time = 0;
let timer = null;
let count = 0;

onmessage = function(e){
    if(e.data === "start"){
        console.log(++count);
        timer = setInterval(myCallback, 1000);
    }
    else if(e.data === "stop"){
        clearInterval(timer);
        close();
    }
}

function myCallback(){
    time++;
    postMessage(time);
}