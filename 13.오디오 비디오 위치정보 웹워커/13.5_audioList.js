//현재 재생중인 곡
let nowPlaying;

//버튼
let playBtn;
let nextBtn;
let checklistBtn;

//플레이리스트와 현재 곡의 번호
let playlist;
let nowIdx;
let checklist;

//오디오 재생바
let audioBar;

//현재 재생중인지?
let isPlaying = false;

function onload(){
     playlist = document.getElementById("playlist");
     checklist = document.querySelectorAll("#checklist input");
     playBtn = document.getElementById("play");
     nextBtn = document.getElementById("next");
     checklistBtn = document.getElementById("checklistPlay");
     audioBar = document.getElementById("audio");

     playBtn.addEventListener("click", play);
     nextBtn.addEventListener("click", next);
     checklistBtn.addEventListener("click", playChecklist);

     audioBar.addEventListener("ended", next);
}

function play(){
    if(isPlaying){
        return;
    }

    isPlaying = true;
    nowIdx = playlist.selectedIndex === -1? 0:playlist.selectedIndex;
    // if(playlist.selectedIndex === -1){
    //     nowIdx = 0;
    // }
    // else{
    //     nowIdx = playlist.selectedIndex;
    // }
    nowPlaying = playlist.options[nowIdx].value;
    console.log(nowPlaying);
    audioBar.src = nowPlaying;

    audioBar.play();
}

function next(){
    if(!isPlaying){
        return;
    }
    nowIdx = (++nowIdx) % playlist.length;
    nowPlaying = playlist.options[nowIdx].value;
    console.log(nowPlaying);
    audioBar.src = nowPlaying;

    audioBar.play();
}

function playChecklist(){

}