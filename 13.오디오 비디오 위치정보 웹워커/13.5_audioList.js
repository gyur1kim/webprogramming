let nowPlaying;
let playBtn;
let nextBtn;
let playlist;
let audioBar;
let nowIdx;

function onload(){
     playlist = document.getElementById("playlist");
     playBtn = document.getElementById("play");
     nextBtn = document.getElementById("next");
     audioBar = document.getElementById("audio")

     playBtn.addEventListener("click", play);
     nextBtn.addEventListener("click", next);
     audioBar.addEventListener("ended", next);
}

function play(){
    nowPlaying = playlist.options[playlist.selectedIndex].value;
    audioBar.src = nowPlaying;
    console.log(nowPlaying);
}

function next(){
    nowIdx = playlist.selectedIndex;
    nowIdx++;
    nowPlaying = playlist.options[nowIdx].value;
    console.log(nowPlaying);
}