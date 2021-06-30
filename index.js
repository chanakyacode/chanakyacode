const btn = document.querySelector(".menu-toggle")
const nav = document.querySelector("nav")

btn.addEventListener("click", () => { nav.classList.toggle("active"); })

var moon = document.getElementById("moon");

moon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        moon.src = "images/sun.png";
    } else {
        moon.src = "images/moon.png";
    }
}