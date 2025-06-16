const myLibrary = [];

// Create Book constructor
function Book(title, author, pages, read) {
if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor." )
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`Title: ${this.title} / Author: ${this.author} / Pages: ${this.pages} / Read: ${this.read}`);
    }
}

// Create a second function that can take arguments
// and create a new book from those args
// and store the new Book in an array
// all books should have a unique id,
// generated using crypto.randomUUID()
// (Challenge to self: implement local storage)
function addBookToLibrary() {

}

// Write a func that loops through each Book
// and displays it on the page on its own card


// Add a New Book btn


// Add a btn on each book to remove it

// Add a btn on each book to change its read status