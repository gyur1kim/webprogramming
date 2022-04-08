//캔버스 관련 변수
let canvas, context;
let startX=0, startY=0;
let isDragging = false;

canvas = document.getElementById("drawCanvas");
context = canvas.getContext("2d");
context.lineWidth = 2
context.strokeStyle = "black";

canvas.addEventListener("mouseover", function(e){this.style.cursor = "crosshair"});
canvas.addEventListener("mousedown", function (e) {down(e)}, false);
canvas.addEventListener("mouseup", function (e) {up(e)}, false);
canvas.addEventListener("mousemove", function (e) {move(e)}, false);
canvas.addEventListener("mouseout", function (e) {out(e)}, false);

function draw(curX, curY){
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}
function down(e){
    startX = e.offsetX;
    startY = e.offsetY;

    isDragging = true;
    console.log(isDragging);
}
function up(e){
    isDragging = false;
}
function move(e){
    if(!isDragging){
        return;
    }
    let curX = e.offsetX;
    let curY = e.offsetY;
    draw(curX, curY);
    startX = curX;
    startY = curY;
}
function out(e){
    isDragging = false;
}


let nowPenSize = document.querySelector("#nowPenSize");
let penSize = document.querySelector("#penSize>input");

//펜 크기 선택 관련
nowPenSize.style.width = penSize.value + "px";
nowPenSize.style.height = penSize.value + "px"

console.log(penSize.value);

//펜 크기 관련
nowPenSize.style.width = context.lineWidth + "px";
nowPenSize.style.height = context.lineWidth + "px";
nowPenSize.style.backgroundColor = context.strokeStyle;
nowPenSize.innerHTML = penSize.value + "px";


//색상 선택 관련
let colorpicker = document.querySelectorAll("#colorPicker>div");
for(div of colorpicker){
    div.style.backgroundColor = div.id;
    div.addEventListener("click", (e)=>{
        console.log(e.target.id);
        context.strokeStyle = e.target.id;
        nowColor.style.backgroundColor = context.strokeStyle;
        nowPenSize.style.backgroundColor = context.strokeStyle;
    });
}

//현재 사용 색상
let nowColor = document.querySelector("#nowColor");
nowColor.style.backgroundColor = context.strokeStyle;

//캔버스 지우기 관련
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", ()=>{
    context.clearRect(0, 0, canvas.width, canvas.height);
});

//아래 캔버스 크기 나오게&클릭하면 크기 재설정
console.log(canvas.width);
let nowSize = document.getElementById("nowCanvasSize");
nowSize.innerText = canvas.width + "x" + canvas.height + "px";
nowSize.addEventListener("click", ()=>{
    var w = parseInt(prompt("캔버스의 너비를 입력하세요"));
    var h = parseInt(prompt("캔버스의 높이를 입력하세요"));
    console.log(w, h)
    if(!isNaN(w) && !isNaN(h)){
        canvas.width = w;
        canvas.height = h;
    }
    else{
        alert("숫자를 입력하세요!");
    }
    nowSize.innerText = canvas.width + "x" + canvas.height + "px";
});