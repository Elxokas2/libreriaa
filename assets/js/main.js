
/*
document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    document.body.style.backgroundImage = "url('assets/img/hero.jpg')";
    body.style.backgroundSize = "cover";
});
*/






document.addEventListener("DOMContentLoaded", function() {
    var img = new Image();
    img.src = 'assets/img/hero.jpg';

    img.onload = function() {
        const body = document.querySelector("body");
        document.body.style.backgroundImage = "url('assets/img/hero.jpg')";
        body.style.backgroundSize = "cover";
    };
});