class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getInfo() {
    return `${this.title} by ${this.author}, published in ${this.year} (Genre: ${this.genre})`;
  }
}
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  filterBooksByYear(year) {
    return this.books.filter(book => book.year > year);
  }

  getAllBookTitles() {
    return this.books.map(book => book.title);
  }

  getTotalNumberOfBooks() {
    return this.books.reduce((total, book) => total + 1, 0);
  }

  getAveragePublicationYear() {
    const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
    return totalYears / this.books.length;
  }
}
function createBook(title, author, year, genre) {
  return new Book(title, author, year, genre);
}
// Create a new library
const myLibrary = new Library();

// Add books using the factory function
myLibrary.addBook(createBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'));
myLibrary.addBook(createBook('1984', 'George Orwell', 1949, 'Dystopian'));
myLibrary.addBook(createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic'));
myLibrary.addBook(createBook('Brave New World', 'Aldous Huxley', 1932, 'Science Fiction'));
myLibrary.addBook(createBook('Moby-Dick', 'Herman Melville', 1851, 'Adventure'));

// Filter books published after 1950
const modernBooks = myLibrary.filterBooksByYear(1950);
console.log('Books published after 1950:', modernBooks.map(book => book.getInfo()));

// Get all book titles
const bookTitles = myLibrary.getAllBookTitles();
console.log('All book titles:', bookTitles);

// Get the total number of books
const totalBooks = myLibrary.getTotalNumberOfBooks();
console.log('Total number of books:', totalBooks);

// Get the average publication year of all books
const averageYear = myLibrary.getAveragePublicationYear();
console.log('Average publication year:', averageYear.toFixed(2));
