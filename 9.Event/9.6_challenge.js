window.addEventListener("load", randImg);
window.addEventListener("load", loadFruitImg);
window.addEventListener("mousemove", imgCursorMove);

// challenge
function randImg(event){
    var imgIdx = Math.floor(Math.random()*100);
    var newDiv = document.getElementsByTagName("td")[imgIdx];

    var newImg = document.createElement("img")
    newImg.src = "9.6_challenge.png";
    newImg.width = "55";
    newImg.addEventListener("mouseover", function(){this.style.cursor = "pointer";});
    newImg.addEventListener("click", randImg);

    newDiv.appendChild(newImg);

    var pastImg = event.target;
    pastImg.remove();
}

//prob9_1
function getOut(){
    document.body.style.backgroundColor = "lightgray";
}
function getIn(){
    document.body.style.backgroundColor = "white";
}
window.onfocus = getIn;
window.onblur = getOut;

//prob9_2
function loadFruitImg(){
    var found = null;
    var fruitImg = document.querySelector("#prob9_2 img");
    var fruits = document.getElementsByName("fruits");
    for(i=0;i<fruits.length;i++){
        if(fruits[i].checked){
            found = fruits[i];
        }
    }
    fruitImg.src = found.value;
}

//prob9_3
function calculate(e){
    if(e.keyCode === 13){
        var expression = document.getElementById("expression");
        var answer = document.getElementById("answer");
        console.log(expression.value);
        answer.value = eval(expression.value);
    }
    else{
        console.log("엔터 아닌거 눌렀습니다");
    }
}

//prob9_4
function showImgCursor(){
    var cursorImg = document.getElementById("imgCursor");
    cursorImg.style.display = "inline";
}
function hideImgCursor(){
    var cursorImg = document.getElementById("imgCursor");
    cursorImg.style.display = "none";
}
function imgCursorMove(e){
    var cursorImg = document.getElementById("imgCursor");
    cursorImg.style.position = "fixed";
    // console.log("clientX : " + e.clientX);
    // console.log("clientY : " + e.clientY);
    // console.log("screenX : " + e.screenX);
    // console.log("screenY : " + e.screenY);
    // console.log("---------------------")
    cursorImg.style.left = e.clientX + 10 + "px";
    cursorImg.style.top = e.clientY + 10 + "px";
}

//prob9_6
function zoomInOut(e){
    var obj = e.target;
    if(e.wheelDelta > 0){
        obj.width *= 1.05;
    }
    else if(e.wheelDelta < 0){
        obj.width *= 0.95;
        if(obj.width < 50){
            obj.width = 50;
        }
    }
}

//prob9_8
var previousLiIdx = null;
function fontSize(e){
    var clickedLi = e.currentTarget;
    for(var i=0; i<liList.length; i++){
        if(liList[i] == clickedLi){
            clickedLi.style.fontSize = "1.3rem";
            if(previousLiIdx != null){
                liList[previousLiIdx].style.fontSize = "1rem";
            }

            if(previousLiIdx == i){
                previousLiIdx = null;
            }
            else{
                previousLiIdx = i;
            }
        }
    }
}

//prob9_9
function viewMore(e){
    var onMouseLi = e.currentTarget;
    for(i=0; i<wishList.length; i++){
        if(onMouseLi == wishList[i]){
            viewMoreDiv[i].style.display = "inline-block";
        }
    }
}
function hideViewMore(e){
    var onMouseLi = e.currentTarget;
    for(i=0; i<wishList.length; i++){
        if(onMouseLi == wishList[i]){
            viewMoreDiv[i].style.display = "none";
        }
    }
}

//prob9_10
var expBox = document.getElementById("expressionBox");
var exp = "";
function num(){
    var n = this.innerHTML;
    console.log(this)
    console.log(n);
    switch(n){
        case "1" :
        case "2" :
        case "3" :
        case "4" :
        case "5" :
        case "6" :
        case "7" :
        case "8" :
        case "9" : exp+= Number(n); break;
        default :
            console.log("안녕")
    }
    expBox.innerHTML = exp;
}
