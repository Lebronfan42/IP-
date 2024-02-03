function updateProgressBar(progressBar, value) {
    const progressFill = progressBar.querySelector(".progress_fill");
    const progressBarText = progressBar.querySelector(".pbar_text");

    progressFill.style.width = `${value}%`;
    progressBarText.textContent = `${value}%`;


    localStorage.setItem("progressValue", value);
}


document.addEventListener("DOMContentLoaded", function() {
    const storedValue = localStorage.getItem("progressValue") || 0;
    const myProgressBar = document.getElementById("myProgressBar");
    updateProgressBar(myProgressBar, storedValue);
});


document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        const myProgressBar = document.getElementById("myProgressBar");
        updateProgressBar(myProgressBar, 20);
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "2") {
        const myProgressBar = document.getElementById("myProgressBar");
        updateProgressBar(myProgressBar, 40);
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "3") {
        const myProgressBar = document.getElementById("myProgressBar");
        updateProgressBar(myProgressBar, 60);
    }
});