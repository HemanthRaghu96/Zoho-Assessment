// Library Management System
// Objective: Design a library management system.
// Requirements:
// - Admin can manage book inventory (add, update, remove books).
// - Members can register, borrow, and return books.
// - Track book availability and member borrowing history.
// - Implement search functionality by title, author, or genre.
// - Limit borrowing to a maximum of 5 books for up to 30 days.

class LocalStorageSimulator {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}

const localStorage = new LocalStorageSimulator();

class Book {
  constructor(id, title, author, genre) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = true;
  }
}

class Member {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = [];
  }
}

class LibraryManagementSystem {
  constructor() {
    this.books = this.loadBooks();
    this.members = this.loadMembers();
  }

  // Load books from localStorage
  loadBooks() {
    const books = localStorage.getItem("books");
    return books ? JSON.parse(books) : [];
  }

  // Save books to localStorage
  saveBooks() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  // Load members from localStorage
  loadMembers() {
    const members = localStorage.getItem("members");
    return members ? JSON.parse(members) : [];
  }

  // Save members to localStorage
  saveMembers() {
    localStorage.setItem("members", JSON.stringify(this.members));
  }

  // Add a new book
  addBook(book) {
    this.books.push(book);
    this.saveBooks();
  }

  // Update an existing book
  updateBook(updatedBook) {
    const index = this.books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
      this.saveBooks();
    }
  }

  // Remove a book
  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
    this.saveBooks();
  }

  // Register a new member
  registerMember(member) {
    this.members.push(member);
    this.saveMembers();
  }

  // Borrow a book
  borrowBook(memberId, bookId) {
    const member = this.members.find((member) => member.id === memberId);
    const book = this.books.find((book) => book.id === bookId);
    if (member && book && book.available && member.borrowedBooks.length < 5) {
      book.available = false;
      member.borrowedBooks.push({ bookId: book.id, borrowDate: new Date() });
      this.saveBooks();
      this.saveMembers();
    }
  }

  // Return a book
  returnBook(memberId, bookId) {
    const member = this.members.find((member) => member.id === memberId);
    const book = this.books.find((book) => book.id === bookId);
    if (member && book) {
      book.available = true;
      member.borrowedBooks = member.borrowedBooks.filter(
        (b) => b.bookId !== bookId
      );
      this.saveBooks();
      this.saveMembers();
    }
  }

  // Search books by different criteria
  searchBooks(criteria) {
    return this.books.filter((book) => {
      return Object.keys(criteria).every((key) => {
        return book[key].toLowerCase().includes(criteria[key].toLowerCase());
      });
    });
  }

  // Get member borrowing history
  getBorrowingHistory(memberId) {
    const member = this.members.find((member) => member.id === memberId);
    if (member) {
      return member.borrowedBooks.map((borrowedBook) => {
        const book = this.books.find((book) => book.id === borrowedBook.bookId);
        return { ...book, borrowDate: borrowedBook.borrowDate };
      });
    }
    return [];
  }

  // Check overdue books and return list of overdue books
  checkOverdueBooks() {
    const today = new Date();
    const overdueBooks = [];

    this.members.forEach((member) => {
      member.borrowedBooks.forEach((borrowedBook) => {
        const borrowDate = new Date(borrowedBook.borrowDate);
        const daysBorrowed = Math.floor(
          (today - borrowDate) / (1000 * 60 * 60 * 24)
        );
        if (daysBorrowed > 30) {
          const book = this.books.find(
            (book) => book.id === borrowedBook.bookId
          );
          overdueBooks.push({ ...book, daysBorrowed });
        }
      });
    });

    return overdueBooks;
  }
}

const library = new LibraryManagementSystem();

// Add books
library.addBook(new Book(1, "To Kill a Mockingbird", "Harper Lee", "Fiction"));
library.addBook(new Book(2, "1984", "George Orwell", "Dystopian"));
library.addBook(new Book(3, "Moby Dick", "Herman Melville", "Adventure"));

// Register members
library.registerMember(new Member(1, "Alice"));
library.registerMember(new Member(2, "Bob"));

// Borrow books
library.borrowBook(1, 1);
library.borrowBook(1, 2);

// Return books
library.returnBook(1, 1);

// Search books
console.log(library.searchBooks({ title: "1984" }));
console.log(library.searchBooks({ author: "Herman Melville" }));

// Get member borrowing history
console.log(library.getBorrowingHistory(1));

// Check overdue books
console.log(library.checkOverdueBooks());
