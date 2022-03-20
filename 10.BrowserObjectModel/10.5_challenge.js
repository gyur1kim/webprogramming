var topValue = 0;
var x = window.innerWidth;
var y = window.innerHeight;
function loading() {
    // var div = document.querySelectorAll("#snow>div");
    // var x = window.innerWidth;
    // var y = window.innerHeight;
    // div.forEach(function (item) {
    //     console.log(item.id);
    //     item.style.display = "inline-block";
    //     item.style.position = "absolute";
    //     item.style.left = parseInt(Math.random() * x) + "px";
    // })
    // while(topValue <= y){
    //     div.forEach(function (item) {
    //         setInterval(falling(item), 1000);
    //     })
    // }
    var div = document.querySelector("#snow>div");

    div.style.display = "inline-block";
    div.style.position = "absolute";
    div.style.left = parseInt(Math.random()*x) + "px";

    setInterval("falling()", 100);

}

function falling(){
    var div = document.querySelector("#snow>div");
    div.style.top = topValue + "px";
    console.log(topValue);
    topValue += 10;
    if(topValue>500){
        topValue = 0;
        div.style.top = topValue + "px";
        div.style.left = parseInt(Math.random()*x) + "px";
    }
}
