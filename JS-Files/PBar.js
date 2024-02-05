function updateProgressBar(progressBar, increment) {
    const progressFill = progressBar.querySelector(".progress_fill");
    const progressBarText = progressBar.querySelector(".pbar_text");

    // Get the current stored value or use 0 if not present
    const currentValue = parseInt(localStorage.getItem("progressValue")) || 0;

    // Calculate the new value by adding the increment
    const newValue = currentValue + increment;

    // Update the progress bar
    progressFill.style.width = `${newValue}%`;
    progressBarText.textContent = `${newValue}%`;

    // Save the new value to localStorage
    localStorage.setItem("progressValue", newValue);
}

document.addEventListener("DOMContentLoaded", function() {
    const storedValue = localStorage.getItem("progressValue") || 0;
    const myProgressBar = document.getElementById("myProgressBar");
    updateProgressBar(myProgressBar, 0); // Initialize with the stored value
});

document.addEventListener("keydown", function(event) {
    const myProgressBar = document.getElementById("myProgressBar");
    
    switch (event.key) {
        case "1":
            updateProgressBar(myProgressBar, 10);
            break;
        case "2":
            updateProgressBar(myProgressBar, 20);
            break;
        case "4":
            updateProgressBar(myProgressBar, -40); // Reset back to 20
            break;
    }
});








