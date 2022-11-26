const bar = document.getElementById('bar');
const nav = document.getElementById('nav');

bar.addEventListener("click", function () {

    nav.style.position = "absolute";
    nav.style.display = "block";
    nav.style.top = "50px";
    nav.style.color = "red";
    nav.style.background = "yellow";
    nav.style.width = "100vw";
    nav.style.left = "0";
    nav.style.transitionDuration = "100s";
    nav.style.flexDirection = "column";

})