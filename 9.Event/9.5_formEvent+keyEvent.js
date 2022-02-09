//선택된 라디오버튼 알아내기
function findChecked(){
    var found = null;
    var cities = document.getElementsByName("city");
    for(i=0;i<cities.length;i++){
        if(cities[i].checked === true){
            found = cities[i];
        }
    }
    if(found != null){
        alert(found.value + "가 선택되었습니다.");
    }
    else{
        alert("아무 도시도 선택되지 않았습니다.");
    }
}

//선택된 물품 계산하기
var price = 0;
function calc(item){
    if(item.checked === true){
        price += parseInt(item.value);
    }
    else{
        price -= parseInt(item.value);
    }
    document.getElementById("subText").value = price;
}

//select 객체에서 선택한 과일 출력하기
function drawImg(){
    var sel = document.getElementById("fruits");
    var idx = sel.selectedIndex;
    var img = document.getElementById("fruitImg");
    img.src = sel.options[idx].value;
}

//키 이벤트 리스너
function whatKeyDown(e){
    var div = document.getElementById("div");
    var str = ""
    if(e.altKey){
        str += "ALT키가 눌렸습니다.<br>"
    }
    if(e.ctrlKey){
        str += "CTRL키가 눌렸습니다.<br>";
    }
    if(e.shiftKey){
        str += "SHIFT키가 눌렸습니다.<br>";
    }

    str += String.fromCharCode(e.keyCode) + "키가 눌렸습니다.<br>";
    div.innerHTML = str;
}