class Book {
  constructor(author, title, year, pages, read) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.read = read;
  }
  toggleReadStatus = function () {
    this.read = !this.read;
  };
}
export { Book };

