window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("background", window.scrollY > 0);
}
)

