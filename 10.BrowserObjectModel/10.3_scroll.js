var scroll = null;
function startScroll(interval){
    scroll = setInterval("autoScroll()", interval);
}
function stopScroll(){
    clearInterval(scroll);
}
function autoScroll(){
    window.scrollBy(0, 10);
}

window.onbeforeprint = function(){
    document.body.style.backgroundImage = "url('../images/10.4_logo.png')";
}
window.onafterprint = function(){
    document.body.style.backgroundImage = "";
}