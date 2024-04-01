import {Book} from './bookClass.js';
import {addInputValidation} from './validateMe.js';
import myLibrary, {loadLibrary, saveLibrary, addBookToLibrary} from "./saveToLocal";


addInputValidation();


function displayBooks() {
  const bookList = document.getElementById('list-for-each-button');
  bookList.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookContainer = document.createElement('div')
    const bookDetails = document.createElement('p');
    bookDetails.innerHTML = `<h3>${book.author}</h3><h2>${book.title}</h2>Year: ${book.year}, Pages: ${book.pages}`;

    const deleteButton = document.createElement('button');
    deleteButton.id = "delete-button"
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => removeBook(index);
    deleteButton.id = "delete-button"

    const readButton = document.createElement('button');
    readButton.id = "read-button"
    readButton.textContent = book.read ? 'Unread' : 'Read';
    readButton.onclick = () => {
      book.toggleReadStatus();
      saveLibrary();
      displayBooks();
    };

    bookContainer.append(bookDetails, deleteButton, readButton);
    bookList.appendChild(bookContainer);
  });
}

function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}


document.getElementById('add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.getElementById('author').value.trim();
  const title = document.getElementById('title').value.trim();
  const year = document.getElementById('year').value;
  const pages = document.getElementById('pageCount').value;


  if (!author || !title || !year || !pages) {
    alert('All fields are required.');
    return;
  }


  let currentDate = new Date();
  currentDate = currentDate.getFullYear();
  if (year.value < 0 || year.value > currentDate || pages.value < 1) {
    alert('Please enter valid values for year and page count');
    return;
  }


  addBookToLibrary(author, title, year, pages);
  saveLibrary();
  document.getElementById("add-book-form").style.display = "none";
  document.getElementById("page-overlay").style.display = "none";
  document.body.classList.remove('no-scroll');

  displayBooks();
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('year').value = '';
  document.getElementById('pageCount').value = '';
});

/**
 * Event listener for the "add-book-toggle-button" click event.
 * This function toggles the visibility of the "add-book-form" and "page-overlay" elements.
 * When the form is displayed, the page is scrolled to the top and scrolling is disabled.
 * When the form is hidden, scrolling is re-enabled.
 */
document.getElementById("add-book-toggle-button").addEventListener("click", function () {
  // Get the "add-book-form" and "page-overlay" elements
  let content = document.getElementById("add-book-form")
  let overlay = document.getElementById("page-overlay")

  // Check if the form is currently hidden
  if (content.style.display === "none") {
    // Disable scrolling
    document.body.classList.add('no-scroll');
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    // Display the overlay and the form
    overlay.style.display = "block"
    content.style.display = "grid"; // Make the div visible
    // Set the grid properties for the form
    content.style.gridAutoRows = "fit-content(100px)";
    content.style.gridAutoColumns = "fit-content(100px)";
    content.style.alignItems = "center";
  } else {
    // If the form is currently displayed, hide it and re-enable scrolling
    document.body.classList.remove('no-scroll');
    content.style.display = "none";
  }
})
document.getElementById('close-form-button').addEventListener('click', function () {
  document.getElementById("add-book-form").style.display = "none";
  document.getElementById("page-overlay").style.display = "none";
  document.body.classList.remove('no-scroll');
});


// Initially display books
displayBooks();
