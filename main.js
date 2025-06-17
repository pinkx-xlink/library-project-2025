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
        return (`Title: ${this.title} / Author: ${this.author} / Pages: ${this.pages} / Read: ${this.read}`);
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
// addBookToLibrary("Guide To Self-Love", "Shy Y", 444, "yes");
//  addBookToLibrary("Booook", "Shy Y", 456, "yes");


// Write a func that loops through each Book
// and displays it on the page on its own card

const books = myLibrary.map(obj => {
    const newEl = document.createElement('div');
    newEl.textContent = obj.info();
    return newEl;
})
books.forEach(el => bookshelf.appendChild(el));

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
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();
  const read = readInput.value.trim();
  const newId = crypto.randomUUID();
  addBookToLibrary(this.title, this.author, this.pages, this.read, this.newId)

  if (title && author) {
    bookCardOutput.innerHTML += `
    <div>
    Title: ${title}. Author ${author}.
    <br>
    Pages: ${pages}. Read: ${read}.
    <div>
    `;
  } else {
    bookCardOutput.textContent = 'Please fill out all fields.';
  }
});


// Add a btn on each book to remove it

// Add a btn on each book to change its read status