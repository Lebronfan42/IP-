document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('#checklist_1 input[type="checkbox"]');
  const completionImage = document.getElementById('completionImage_1');
  const myProgressBar = document.getElementById('myProgressBar');


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


  updateCompletionImage();


  const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (!allChecked) {
    const storedValue = localStorage.getItem("progressValue") || 0;
    myProgressBar.querySelector('.progress_fill').style.width = `${storedValue}%`;
    myProgressBar.querySelector('.pbar_text').textContent = `${storedValue}%`;
  }


  disableUnchecked();

  function updateCompletionImage() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
      completionImage.src = '/Background-images/pr.PNG';
    } else {
      completionImage.src = '/Background-images/back.PNG';
    }


    checkboxes.forEach(function (checkbox) {
      const checkboxId = checkbox.id;
      const checkboxState = checkbox.checked ? 'checked' : 'unchecked';
      localStorage.setItem(checkboxId, checkboxState);
    });
  }

  function updateProgressBar() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);


    const currentValue = parseInt(localStorage.getItem("progressValue")) || 0;
    let newValue;

    if (allChecked) {

      newValue = currentValue + 10;
    } else {

      newValue = currentValue;
    }


    myProgressBar.querySelector('.progress_fill').style.width = `${newValue}%`;
    myProgressBar.querySelector('.pbar_text').textContent = `${newValue}%`;


    localStorage.setItem("progressValue", newValue);
  }

  function disableUnchecked() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    checkboxes.forEach(function (checkbox) {

      checkbox.disabled = allChecked;
    });
  }


  setTimeout(disableUnchecked, 100);
});





