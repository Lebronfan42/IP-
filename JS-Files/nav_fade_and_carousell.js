window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("background", window.scrollY > 0);
}
)

const carousel = document.querySelector(".carousel");

let isDragging = false,startX, startScrollLeft;


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
    
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft + (startX - (e.pageX || e.touches[0].pageX));
}

const dragEnd = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseleave", dragEnd);
carousel.addEventListener("touchend", dragEnd);


function updateProgressBar(progressBar, value) {
    progressBar.querySelector(".progress_fill").style.width = `$(value)%`;
    progressBar.querySelector(".progress_text").textContent= `$(value)%`;
}