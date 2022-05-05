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
    deleteWordBtn.addEventListener("click", deleteWord);
    showListBtn.addEventListener("click", showList);
}

function searchEng(){
    if(!window.localStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    //단어가 있는 경우 -> korean에 출력
    if(localStorage.getItem(english.value)){
        korean.value = localStorage.getItem(english.value);
    }
    //단어가 없는 경우 -> 없다고 alert창 띄움
    else{
        alert("단어가 단어장에 존재하지 않습니다.");
    }
}

function saveWord(){
    if(!window.localStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    //단어가 없는 경우 -> 저장
    if(!localStorage.getItem(english.value)){
        localStorage.setItem(english.value, korean.value);
    }
    //단어가 존재하는 경우 -> 수정할 것인지 묻기
    else{
        var toChange = confirm("이 단어는 이미 존재합니다. 수정하시겠습니까?");
        if(toChange){
            localStorage.setItem(english.value, korean.value);
        }
        else{
            return;
        }
    }
}

function deleteWord(){
    if(!window.localStorage){
        alert("이 브라우저는 지원하지 않는 기능입니다.");
        return;
    }
    //영어단어 존재 -> 삭제
    if(localStorage.getItem(english.value)){
        localStorage.removeItem(english.value);
    }
    //존재하지 않으면 -> alert창
    else{
        alert("존재하지 않는 단어입니다.")
    }
}

function showList(){
    //새로운 윈도우 창에 저장된 단어를 출력

}