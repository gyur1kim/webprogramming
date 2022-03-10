function loading() {
    var div = document.querySelectorAll("#snow>div");
    var x = window.innerWidth;
    div.forEach(function (i) {
        i.style.position = "absolute";
        i.style.display = "inline-block";
        i.style.x = parseInt(Math.random() * x);
        console.log(parseInt(Math.random() * x));
    })
}
