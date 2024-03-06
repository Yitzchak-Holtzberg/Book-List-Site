const myLibrary = [];


class Book {
  constructor(author, title, year, pages) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
  }
}


function addBookToLibrary(author, title, year, pages) {
  myLibrary.push(new Book(author, title, year, pages))
}

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  myLibrary.forEach(Book => {
    const bookDetails = document.createElement('div')
    bookDetails.innerHTML = `Author: ${Book.author}, Title: ${Book.title}, Year: ${Book.year}, Pages: ${Book.pages}`;
    bookList.appendChild(bookDetails);
  })

}

addBookToLibrary('George Orwell', '1984', '1949', '328');
addBookToLibrary('J.R.R. Tolkien', 'The Lord of the Rings', '1954', '1178');

document.getElementById('book-list-button').addEventListener('click', displayBooks)

document.getElementById("add-book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookFromForm()
});

function addBookFromForm() {
  const author = document.getElementById("author").value.trim();
  const title = document.getElementById("title").value.trim();
  const year = document.getElementById("year").value;
  const pages = document.getElementById("pageCount").value;
  console.log(author, title, year, pages)
  document.getElementById("author").value = '';
  document.getElementById("title").value = '';
  document.getElementById("year").value = '';
  document.getElementById("pageCount").value = '';


  // Basic validation
  if (!author || !title || !year || !pages) {
    alert("All fields are required.");
    return;
  }

  addBookToLibrary(author, title, year, pages);
  displayBooks(); // Refresh the display to include the new book
}

document.getElementById("add-book-toggle-button").addEventListener("click", function () {
  let content = document.getElementById("add-book-form")
  if (content.style.display === "none") {
    content.style.display = "grid"; // Make the div visible
    content.style.gridAutoRows = "fit-content(100px)";
    content.style.gridAutoColumns = "fit-content(100px)";
    content.style.alignItems = "center";
  } else {
    content.style.display = "none";
  }
})
