import {Book} from "./bookClass";

let myLibrary = loadLibrary() || [];
export default myLibrary;


if (myLibrary.length === 0) {
  console.log('Library is empty. Adding example books to library.');
  console.log(myLibrary)
  // Example books added to library
  addBookToLibrary('George Orwell', '1984', '1949', '328', true);
  addBookToLibrary('J.R.R. Tolkien', 'The Lord of the Rings', '1954', '1178', false);
  addBookToLibrary('George Orwell', '1984', '1949', '328', true);
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
  addBookToLibrary('Harper Lee', 'To Kill a Mockingbird', '1960', '281', true);
  addBookToLibrary('F. Scott Fitzgerald', 'The Great Gatsby', '1925', '180', true);
  addBookToLibrary('Ray Bradbury', 'Fahrenheit 451', '1953', '158', true);
  addBookToLibrary('Kurt Vonnegut', 'Slaughterhouse-Five', '1969', '275', true);
  addBookToLibrary('Aldous Huxley', 'Brave New World', '1932', '311', true);
  addBookToLibrary('Gabriel Garcia Marquez', 'One Hundred Years of Solitude', '1967', '417', true);
  addBookToLibrary('Leo Tolstoy', 'War and Peace', '1869', '1225', true);
  addBookToLibrary('J.D. Salinger', 'The Catcher in the Rye', '1951', '277', true);
  addBookToLibrary('George R.R. Martin', 'A Game of Thrones', '1996', '694', false);
  addBookToLibrary('J.R.R. Tolkien', 'The Hobbit', '1937', '310', true);
  addBookToLibrary('Harper Lee', 'Go Set a Watchman', '2015', '278', false);
  addBookToLibrary('Dan Brown', 'The Da Vinci Code', '2003', '689', true);
  addBookToLibrary('Emily Bronte', 'Wuthering Heights', '1847', '464', false);
  addBookToLibrary('Fyodor Dostoevsky', 'Crime and Punishment', '1866', '671', true);
  addBookToLibrary('Herman Melville', 'Moby-Dick', '1851', '720', false);
  addBookToLibrary('Ernest Hemingway', 'For Whom the Bell Tolls', '1940', '471', true);
  addBookToLibrary('John Steinbeck', 'The Grapes of Wrath', '1939', '464', false);
  addBookToLibrary('Leo Tolstoy', 'Anna Karenina', '1877', '864', true);
  addBookToLibrary('Markus Zusak', 'The Book Thief', '2005', '552', false);
  addBookToLibrary('Oscar Wilde', 'The Picture of Dorian Gray', '1890', '254', true);
  addBookToLibrary('Paulo Coelho', 'The Alchemist', '1988', '208', false);
  addBookToLibrary('Robert Louis Stevenson', 'Treasure Island', '1883', '240', true);
  addBookToLibrary('Stephen King', 'It', '1986', '1138', false);
  addBookToLibrary('Thomas Hardy', 'Tess of the d\'Urbervilles', '1891', '592', true);
  addBookToLibrary('Victor Hugo', 'Les Misérables', '1862', '1463', false);
  addBookToLibrary('Virginia Woolf', 'To the Lighthouse', '1927', '209', true);
  addBookToLibrary('William Golding', 'Lord of the Flies', '1954', '224', false);

}


export function saveLibrary() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}


export function createBookFromObject(obj) {
  return new Book(obj.author, obj.title, obj.year, obj.pages, obj.read);
}

export function loadLibrary() {
  if (localStorage.getItem('myLibrary')) {
    let books = JSON.parse(localStorage.getItem('myLibrary'));
    myLibrary = books.map(book => createBookFromObject(book));
  }
}

export function addBookToLibrary(author, title, year, pages, read = false) {
  const book = new Book(author, title, year, pages, read);
  myLibrary.push(book);
  saveLibrary();
}



