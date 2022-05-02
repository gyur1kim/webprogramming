let item, count, board;
onload = function(){
    item = document.getElementById("item");
    count = document.getElementById("count");
    board = document.getElementById("board");
}

function store(){
    if(!window.sessionStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    sessionStorage.setItem(item.value, count.value);
    board.innerHTML = item.value + "이/가 저장되었습니다."
}
function retrieve(){
    if(!window.sessionStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    var val = sessionStorage.getItem(item.value);
    if(val === null){
        alert(`${item.value}은/는 구입 리스트에 없습니다`);
    }
    else{
        board.innerHTML = item.value + "은/는 " + val + "개 구매하셨습니다.";
    }
}