let myLibrary = [];
const bookshelf = document.getElementById('bookshelf');

// Create Book constructor
function Book(title, author, pages, read, id) {
if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor." )
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function() {
        return (`Title: ${this.title} / Author: ${this.author} / Pages: ${this.pages} / Read: ${this.read} / Id: ${this.id}`);
    }
    this.delete = function() {
        console.log(`${this.id} has been deleted.`);
        delete this.id;
    }
}

Book.prototype.sayHello = function() {
    console.log("Hello, I'm a book!");
};


// Create a second function that can take arguments
// and create a new book from those args
// and store the new Book in an array
// all books should have a unique id,
// generated using crypto.randomUUID()
// (Challenge to self: implement local storage)
function addBookToLibrary(title, author, pages, read, id) {
    const book = new Book(title, author, pages, read, id);
    console.log(book);
    myLibrary = [...myLibrary, book];
    console.log(myLibrary);
    return book;
}
addBookToLibrary("Guide To Self-Love", "Shy Y", 444, "yes");
//  addBookToLibrary("Booook", "Shy Y", 456, "yes");


// Write a func that loops through each Book
// and displays it on the page on its own card
function renderBooks() {
   // bookshelf.innerHTML = '';
    const books = myLibrary.map(obj => {
        const newBook = document.createElement('div');
        newBook.textContent = obj.info();
        
        return newBook;
    })
    books.forEach(el => bookshelf.appendChild(el));
}
renderBooks();

// Add a New Book btn
// Select the form elements
const form = document.getElementById('myForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');
const bookCardOutput = document.getElementById('book-card-output');
const submitButton = document.getElementById('submitButton');


// Add an event listener to the button
submitButton.addEventListener('click', () => {
  const newId = crypto.randomUUID();
  addBookToLibrary(titleInput.value.trim(), authorInput.value.trim(), pagesInput.value.trim(), readInput.value.trim(), this.newId);
  console.log(this.title, this.author, this.pages, this.read, this.newId);
  if (title && author) {
    renderBooks();
    // <button id="delete-book-btn"> X </button>
    // const deleteBookBtn = document.getElementById("delete-book-btn");
    // deleteBookBtn.className = 'delete-btn';
    
    // deleteBookBtn.onclick = () => {
    //     console.log(myLibrary);
    //     this.delete();
    // }
        
  } else {
    bookCardOutput.textContent = 'Please fill out all fields.';
  }
});


// Add a btn on each book to remove it

// Add a btn on each book to change its read status