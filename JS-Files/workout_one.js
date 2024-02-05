document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('#checklist_1 input[type="checkbox"]');
  const completionImage = document.getElementById('completionImage_1');
  const myProgressBar = document.getElementById('myProgressBar');

  // Load the checkbox states from localStorage
  checkboxes.forEach(function (checkbox) {
    const checkboxId = checkbox.id;
    const storedState = localStorage.getItem(checkboxId);

    if (storedState === 'checked') {
      checkbox.checked = true;
    }

    checkbox.addEventListener('change', function () {
      updateCompletionImage();
      updateProgressBar();
      disableUnchecked();
    });
  });

  // Initialize completion image based on stored states
  updateCompletionImage();

  // Initialize progress bar based on stored value if not all checkboxes are checked
  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (!allChecked) {
    const storedValue = localStorage.getItem("progressValue") || 0;
    myProgressBar.querySelector('.progress_fill').style.width = `${storedValue}%`;
    myProgressBar.querySelector('.pbar_text').textContent = `${storedValue}%`;
  }

  // Disable checkboxes if all are checked
  disableUnchecked();

  function updateCompletionImage() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
      completionImage.src = '/Background-images/pr.PNG';
    } else {
      completionImage.src = '/Background-images/back.PNG';
    }

    // Save checkbox states to localStorage
    checkboxes.forEach(function (checkbox) {
      const checkboxId = checkbox.id;
      const checkboxState = checkbox.checked ? 'checked' : 'unchecked';
      localStorage.setItem(checkboxId, checkboxState);
    });
  }

  function updateProgressBar() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    // If all checkboxes are checked, increase the progress bar by 10
    const currentValue = parseInt(localStorage.getItem("progressValue")) || 0;
    let newValue;

    if (allChecked) {
      // If all checkboxes are checked, increase the progress bar by 10
      newValue = currentValue + 10;
    } else {
      // If at least one checkbox is unchecked, set the progress bar to its previous value
      newValue = currentValue;
    }

    // Update the progress bar
    myProgressBar.querySelector('.progress_fill').style.width = `${newValue}%`;
    myProgressBar.querySelector('.pbar_text').textContent = `${newValue}%`;

    // Save the new value to localStorage
    localStorage.setItem("progressValue", newValue);
  }

  function disableUnchecked() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    checkboxes.forEach(function (checkbox) {
      // Disable all checkboxes if all are checked
      checkbox.disabled = allChecked;
    });
  }

  // Call disableUnchecked after a short delay to ensure that it runs after the checkboxes are re-enabled on page load
  setTimeout(disableUnchecked, 100);
});





