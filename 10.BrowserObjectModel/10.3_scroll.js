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