function updateProgressBar(progressBar, value) {
    const progressFill = progressBar.querySelector(".progress_fill");
    const progressBarText = progressBar.querySelector(".pbar_text");

    progressFill.style.width = `${value}%`;
    progressBarText.textContent = `${value}%`;
}

// Event listener for the '1' key
document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        const myProgressBar = document.getElementById("myProgressBar");
        updateProgressBar(myProgressBar, 60);
    }
});