//open challenge
var gameCount = 3;
function resetGame(obj){
    document.getElementById("firstNum").innerText = "0";
    document.getElementById("secNum").innerText = "0";
    document.getElementById("thirdNum").innerText = "0";
    obj.innerHTML = "";
    gameCount = 3;
}
function randNum(obj){
    if(gameCount > 0){
        var randInt = Math.floor(Math.random() * 3);
        obj.innerHTML = randInt;
        gameCount -= 1;
    }
    if(gameCount == 0){
        var num1 = document.getElementById("firstNum").innerText;
        var num2 = document.getElementById("secNum").innerText;
        var num3 = document.getElementById("thirdNum").innerText;
        if((num1 === num2 ) && (num2 === num3))
            document.getElementById("gameResult").innerText = "Success(click here to do again)"
        else
            document.getElementById("gameResult").innerText = "Fail(click here to do again)"
    }
}

//8-2번
function drawBorder(){
    var border = document.getElementById("border");
    border.style.border = "2px dotted violet";
}
function countP(){
    var pList = document.getElementsByClassName("p");
    alert("<p>태그의 개수는 " + pList.length);
}

//8-3번
function showHide(){
    var spanList = document.querySelectorAll("#prob8_3 span");
    if(spanList[0].style.visibility === "visible"){
        for(var i=0; i<spanList.length; i++){
            var span = spanList[i];
            span.style.visibility = "hidden";
        }
    }
    else{
        for(var i=0; i<spanList.length; i++){
            var span = spanList[i];
            span.style.visibility = "visible";
        }
    }
}

//8_6번
function travel(){
    var text = prompt("HTML 텍스트 혹은 그냥 텍스트를 입력하세요");
    var textarea = document.querySelector("#prob8_6>p");
    if(text == null || text === "")
        textarea.innerHTML = "가고 싶은 곳을 고민해보아요~";
    else
        textarea.innerHTML = text;
}

//8-9번
function addList(){
    var sequence = prompt("라면을 끓이는 순서를 입력해 주세요~");
    var parent= document.querySelector("#prob8_9 ol");
    var nextSeq = document.createElement("li");
    nextSeq.innerHTML = sequence;
    parent.appendChild(nextSeq);
}

//8-10번
function addAnswer(obj, answer){
    var parent = obj.parentElement;
    var ans = document.createElement("p");
    ans.style.color = 'red';
    ans.style.fontSize = '1.5rem';
    ans.style.fontStyle = 'italic';
    ans.innerHTML = answer;
    parent.appendChild(ans);
}