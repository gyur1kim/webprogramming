// challenge
function randImg(event){
    var imgIdx = Math.floor(Math.random()*100);
    var newDiv = document.getElementsByTagName("td")[imgIdx];

    var newImg = document.createElement("img")
    newImg.src = "9.6_challenge.png";
    newImg.width = "50";
    newImg.height = "50";
    newImg.addEventListener("click", randImg);

    newDiv.appendChild(newImg);

    var pastImg = event.target;
    console.log(event.target);
    pastImg.remove();
}

