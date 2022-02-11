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

//prob9.1
window.addEventListener("focus", function(){document.body.style.backgroundColor = "white;"});
window.addEventListener("blur", function(){document.body.style.backgroundColor = "gray;"});