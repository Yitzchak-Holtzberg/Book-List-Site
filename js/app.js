const myLibrary = [];

function Book(author, title, year, pages, read) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(author, title, year, pages, read = false) {
  myLibrary.push(new Book(author, title, year, pages, read));
}

function displayBooks() {
  const bookList = document.getElementById('list-for-each-button');
  bookList.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookContainer = document.createElement('div')
    const bookDetails = document.createElement('p');
    bookDetails.innerHTML = `<h3>${book.author}</h3><h2>${book.title}</h2>Year: ${book.year}, Pages: ${book.pages}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => removeBook(index);
    deleteButton.id = "delete-button"

    const readButton = document.createElement('button');
    readButton.id="read-button"
    readButton.textContent = book.read ? 'Unread' : 'Read';
    readButton.onclick = () => {
      book.toggleReadStatus();
      displayBooks();
    };

    bookContainer.appendChild(bookDetails)
    bookContainer.appendChild(deleteButton)
    bookContainer.appendChild(readButton)
    bookList.appendChild(bookContainer)
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Example books added to library
addBookToLibrary('George Orwell', '1984', '1949', '328', true);
addBookToLibrary('J.R.R. Tolkien', 'The Lord of the Rings', '1954', '1178', false);
addBookToLibrary('George Orwell', '1984', '1949', '328', true);
addBookToLibrary('J.R.R. Tolkien', 'The Lord of the Rings', '1954', '1178', false);
addBookToLibrary('Jane Austen', 'Pride and Prejudice', '1813', '279', true);
addBookToLibrary('Charles Dickens', 'Great Expectations', '1861', '544', false);
addBookToLibrary('Mark Twain', 'The Adventures of Huckleberry Finn', '1884', '366', true);
addBookToLibrary('Ernest Hemingway', 'The Old Man and the Sea', '1952', '127', false);
addBookToLibrary('William Shakespeare', 'Hamlet', '1603', '324', true);
addBookToLibrary('J.K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '1997', '309', true);
addBookToLibrary('Suzanne Collins', 'The Hunger Games', '2008', '374', true);
addBookToLibrary('Stephen King', 'The Shining', '1977', '447', false);
addBookToLibrary('Gillian Flynn', 'Gone Girl', '2012', '415', false);
addBookToLibrary('Margaret Atwood', 'The Handmaid\'s Tale', '1985', '311', true);
addBookToLibrary('Yuval Noah Harari', 'Sapiens: A Brief History of Humankind', '2011', '443', true);
addBookToLibrary('Malcolm Gladwell', 'Outliers: The Story of Success', '2008', '309', false);
addBookToLibrary('Michelle Obama', 'Becoming', '2018', '426', true);
addBookToLibrary('Stephen Hawking', 'A Brief History of Time', '1988', '212', false);
addBookToLibrary('Tara Westover', 'Educated', '2018', '334', true);


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

  addBookToLibrary(author, title, year, pages);
  document.getElementById("add-book-form").style.display = "none";
  document.getElementById("page-overlay").style.display = "none";
  document.body.classList.remove('no-scroll'); // Re-enable scrolling

  displayBooks();

  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('year').value = '';
  document.getElementById('pageCount').value = '';
});

document.getElementById("add-book-toggle-button").addEventListener("click", function () {
  let content = document.getElementById("add-book-form")
  let overlay = document.getElementById("page-overlay")
  if (content.style.display === "none") {
    document.body.classList.add('no-scroll');
    window.scrollTo(0, 0);
    overlay.style.display = "block"
    content.style.display = "grid"; // Make the div visible
    content.style.gridAutoRows = "fit-content(100px)";
    content.style.gridAutoColumns = "fit-content(100px)";
    content.style.alignItems = "center";
  } else {
    document.body.classList.remove('no-scroll');
    content.style.display = "none";
  }
})
document.getElementById('close-form-button').addEventListener('click', function () {
  document.getElementById("add-book-form").style.display = "none";
  document.getElementById("page-overlay").style.display = "none";
  document.body.classList.remove('no-scroll'); // Re-enable scrolling

});
// Initially display books
displayBooks();
