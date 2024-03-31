export function addInputValidation() {

  const authorInput = document.getElementById('author');
  const titleInput = document.getElementById('title');
  const yearInput = document.getElementById('year');
  const pageCountInput = document.getElementById('pageCount');


// Add 'input' event listener to each input field
  [authorInput, titleInput, yearInput, pageCountInput].forEach(input => {
    input.addEventListener('input', function () {
      // Check the validity of the input
      if (input.checkValidity()) {
        // If the input is valid, change the border color to green
        input.style.borderColor = 'rgb(39, 93, 44)';
        input.style.borderStyle = 'thick 2px solid';
        input.style.borderRadius = '5px';

      } else {
        // If the input is not valid, change the border color to red
        input.style.borderColor = 'rgb(204, 0, 0)';
        input.style.borderStyle = 'thick 2px solid';
        input.style.borderRadius = '5px';
      }
    });
  });
}
