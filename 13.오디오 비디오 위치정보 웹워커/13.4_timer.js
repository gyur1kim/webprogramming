let timer = null;
let sec = 0;
let min = 0;
let hour = 0;
let time = "";

onmessage = function(e){
    if(e.data === "start"){
        if(timer != null){      //이 문장이 없으면 누를 때마다 setInterval이 생성된다.
            return;
        }
        timer = setInterval(myCallback, 1000);

    }
    else if(e.data === "stop"){
        if(timer === null){
            return;
        }
        clearInterval(timer);
        close();
    }
}

function myCallback(){
    time = "";
    sec++;
    if(sec >= 60){
        min++;
        sec = 0;
    }
    if(min >= 60){
        hour++;
        min = 0;
    }
    time += (hour<10?"0"+hour:hour) + ":" + (min<10?"0"+min:min)+":"+ (sec<10?"0"+sec:sec);
    postMessage(time);
}