const triggerImage = document.getElementById('trigger-image');
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-btn');

// Show the popup when the image is clicked
triggerImage.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

// Close the popup when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
});