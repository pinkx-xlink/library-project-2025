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
        const bookToRemove = myLibrary.findIndex(obj => obj.id === this.id);
        if (bookToRemove !== -1) {
            myLibrary.splice(bookToRemove, 1);
        }
        console.log(`${this.id} has been deleted.`);
        console.log(myLibrary);
    }
    this.isRead = function() {
        if (this.isRead === true) {
            console.log('READ');
        } else {
            console.log("ain't read yet")
        }
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

function addBookToLibrary(title, author, pages, read, id) {
    const book = new Book(title, author, pages, read, id);
    console.log(book);
    myLibrary = [...myLibrary, book];
    console.log(myLibrary);
    return book;
}
addBookToLibrary("Guide To Self-Love", "Shy Y", 444, "yes");
//  addBookToLibrary("Booook", "Shy Y", 456, "yes");


   function fadeIn(element, duration) {
        let opacity = 0;
        element.style.opacity = opacity;
        const interval = 50; // ms
        const increment = interval / duration;

        const fade = setInterval(() => {
            opacity += increment;
            if (opacity >= 1) {
                opacity = 1;
                clearInterval(fade);
            }
            element.style.opacity = opacity;
        }, interval);
    }

// Write a func that loops through each Book
// and displays it on the page on its own card
function renderBooks() {
   bookshelf.innerHTML = '';
    const books = myLibrary.map(obj => {
        const newBook = document.createElement('div');
        newBook.textContent = obj.info();
        newBook.setAttribute('class', 'new-book');

        // fadeIn(newBook, 1000);
        const readStatusBtnLabel = document.createElement('label');
        readStatusBtnLabel.setAttribute('for', 'read');
        readStatusBtnLabel.textContent = 'Read?';
        newBook.appendChild(readStatusBtnLabel);
        const readStatusBtn = document.createElement('input');
        readStatusBtn.setAttribute('type', 'checkbox');
        readStatusBtn.setAttribute('id', 'readStatus');
        readStatusBtn.setAttribute('name', 'read');
        readStatusBtn.setAttribute('value', 'yes');
        newBook.appendChild(readStatusBtn);
        readStatusBtn.addEventListener('change', function(event) {
            if (event.target.checked) {
                this.isRead = true;
                console.log('YIPPEE');
            } else {
                this.isRead = false;
            }
        })
        

        const deleteBookBtn = document.createElement('button');
        deleteBookBtn.className = 'delete-btn';
        deleteBookBtn.textContent = 'x';
        newBook.appendChild(deleteBookBtn);
        deleteBookBtn.onclick = () => {
            obj.delete();
            renderBooks();
        } 
        return newBook;
    })
    books.forEach(el => bookshelf.appendChild(el));
    saveLibraryToLocalStorage();
}
renderBooks();

const form = document.getElementById('myForm');
form.style.display = 'none';
// Add a New Book btn
const showNewBookFormBtn = document.getElementById('show-new-book-form-btn');
showNewBookFormBtn.onclick = () => {
    form.style.display = 'block';
    fadeIn(form, 1000);
    console.log('unhide')
};
// Select the form elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');
const bookCardOutput = document.getElementById('book-card-output');
const submitButton = document.getElementById('submitButton');

const newBookConfirmOutput = document.getElementById('add-new-book-container');
// Add an event listener to the button
submitButton.addEventListener('click', () => {
  // const newId = crypto.randomUUID();
  addBookToLibrary(titleInput.value.trim(), authorInput.value.trim(), pagesInput.value.trim(), readInput.value.trim(), this.id);
  console.log(this.title, this.author, this.pages, this.read, this.newId);
  if (title && author) {
    form.style.display = 'none';
    const bookAddedConfirmation = document.createElement('p');
    bookAddedConfirmation.textContent = 'New book added to library';
    newBookConfirmOutput.appendChild(bookAddedConfirmation);
    setTimeout(() => {
        bookAddedConfirmation.remove();
    }, 3000);
    renderBooks();
  } else {
    bookCardOutput.textContent = 'Please fill out all fields.';
  }
});


// Add a btn on each book to remove it
// Done! ^

// Add a btn on each book to change its read status
// Done! ^

// (Challenge to self: implement local storage)
function saveLibraryToLocalStorage() {
    const jsonString = JSON.stringify(myLibrary);
    // Store the string
    localStorage.setItem("myArrayKey", jsonString);
    // get the string from local storage
    const storedJsonString = localStorage.getItem("myArrayKey");
    if (storedJsonString) {
    // Convert the JSON string back to an array
        const retrievedArray = JSON.parse(storedJsonString);
        console.log(retrievedArray);
    } else {
        console.log("no date found in local storage.")
    }
}


