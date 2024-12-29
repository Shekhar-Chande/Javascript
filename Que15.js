class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.availability = true;  // By default, the book is available
    }
  
    // Method to change the availability of the book
    toggleAvailability() {
      this.availability = !this.availability;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];  // Array to store the books in the library
    }
  
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
    }
  
    // Method to check out a book
    checkOutBook(title) {
      const book = this.books.find(book => book.title === title);
      
      if (!book) {
        console.log("Book not found in the library.");
        return;
      }
      
      if (book.availability) {
        book.toggleAvailability();  // Mark as unavailable
        console.log(`You have checked out "${book.title}" by ${book.author}.`);
      } else {
        console.log(`Sorry, "${book.title}" is currently unavailable.`);
      }
    }
  
    // Method to return a book to the library
    returnBook(title) {
      const book = this.books.find(book => book.title === title);
      
      if (!book) {
        console.log("Book not found in the library.");
        return;
      }
      
      if (!book.availability) {
        book.toggleAvailability();  // Mark as available
        console.log(`You have returned "${book.title}" by ${book.author}.`);
      } else {
        console.log(`This book was not checked out.`);
      }
    }
  
    // Method to get a list of all available books
    getAvailableBooks() {
      const availableBooks = this.books.filter(book => book.availability);
      
      if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
      }
  
      console.log("Available books:");
      availableBooks.forEach(book => {
        console.log(`- "${book.title}" by ${book.author}`);
      });
    }
  }
  
  // Example usage:
  const library = new Library();
  
  // Create books
  const book1 = new Book("1984", "George Orwell");
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
  const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  
  // Add books to the library
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  // List available books
  library.getAvailableBooks();
  
  // Check out a book
  library.checkOutBook("1984");
  
  // List available books after checkout
  library.getAvailableBooks();
  
  // Try checking out the same book again
  library.checkOutBook("1984");
  
  // Return a book
  library.returnBook("1984");
  
  // List available books after returning the book
  library.getAvailableBooks();
  