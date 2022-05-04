let searchEngBtn, saveWordBtn, deleteWordBtn, showListBtn;
let english, korean;

onload = function(){
    english = document.getElementById("english");
    korean = document.getElementById("korean");

    searchEngBtn = document.getElementById("searchEng");
    saveWordBtn = document.getElementById("saveWord");
    deleteWordBtn = document.getElementById("deleteWord");
    showListBtn = document.getElementById("showList");

    searchEngBtn.addEventListener("click", searchEng);
    saveWordBtn.addEventListener("click", saveWord);
}

function searchEng(){
    if(!window.localStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    //단어가 있는 경우 -> korean에 출력
    //단어가 없는 경우 -> 없다고 alert창 띄움
    korean.value = localStorage.getItem(english.value);
    console.log(english.value);
    console.log(localStorage.getItem(english.value));
}

function saveWord(){
    if(!window.localStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    //단어가 없는 경우 -> 저장
    //단어가 존재하는 경우 -> 수정할 것인지 묻기
    localStorage.setItem(english.value, korean.value);
}

function deleteWord(){
    //영어단어 존재 -> 삭제
    //존재하지 않으면 -> alert창
}

function showList(){
    //새로운 윈도우 창에 저장된 단어를 출력
}