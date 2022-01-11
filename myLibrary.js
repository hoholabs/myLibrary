//reworking to use classes instead of constructors

let bookContainer = document.getElementById("book-container");
let dataPosition = 0;
let myLibrary = [];

// function book(title,author,pages,read) {
//   // the constructor...
    
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     // this.position = dataPosition;
//     // dataPosition++
// }

class book {
  constructor(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title,author,pages,read) {
  // do stuff here
  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary('You','Joe Mama',69,true);
addBookToLibrary('The Hobbit','jrr','50',false);
addBookToLibrary('The return','bob','42',false);
//updateDisplay();
displayLibrary();

function displayLibrary(){
  for(let i = 0; i < myLibrary.length; i++){

  let displayedBook = document.createElement('div');
  
  displayedBook.className = "book-card"; //create book card

    //create divs for the book elements
    let displayedBookTitle = document.createElement('div');
    let displayedBookAuthor = document.createElement('div');
    let displayedBookPages = document.createElement('div');
    let displayedBookRead = document.createElement('button');
    let displayedBookRemove = document.createElement('button'); //remove book button
    //assign class names to the elements
    displayedBookTitle.className = "book-title";
    displayedBookAuthor.className = "book-author";
    displayedBookPages.className = "book-pages";
    displayedBookRead.className = "book-read";
    displayedBookRemove.className = "book-remove";
    //change text content of each element
    displayedBookTitle.textContent = myLibrary[i].title;
    displayedBookAuthor.textContent = `${myLibrary[i].author}`;
    displayedBookPages.textContent = `${myLibrary[i].pages} pages`;
    if(myLibrary[i].read){
      displayedBookRead.textContent = "read"
    }
    else{displayedBookRead.textContent = "unread"}
    displayedBookRemove.textContent = "x";
    
    //add remove eventlistener
    
    displayedBookRemove.addEventListener("click", function() {
      myLibrary.splice(i, 1);
      updateDisplay();
    });

    //add toggle read event listener
    displayedBookRead.addEventListener("click", function(){
      myLibrary[i].read = !myLibrary[i].read;
      updateDisplay();
    });

    //add each element to the book card
    displayedBook.appendChild(displayedBookTitle);
    displayedBook.appendChild(displayedBookAuthor);
    displayedBook.appendChild(displayedBookPages);
    displayedBook.appendChild(displayedBookRead);
    displayedBook.appendChild(displayedBookRemove);


  bookContainer.appendChild(displayedBook)
  }
}

// Add a “NEW BOOK” button that brings up a form allowing users 
// to input the details for the new book: author, title, number 
// of pages, whether it’s been read and anything else you might want.

let addBookForm = document.getElementById("add-book-form");

let addBookButton = document.getElementById("add-book-button");

addBookButton.addEventListener("click", function() {
  addBookForm.style.display = "block";
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formTitle = addBookForm.title.value;
  formAuthor = addBookForm.author.value;
  formPages = addBookForm.pages.value;
  formRead = addBookForm.read.checked;
 
  addBookToLibrary(formTitle,formAuthor,formPages,formRead);
  addBookForm.style.display = "none";
  updateDisplay();

});

function updateDisplay(){
  document.querySelectorAll('.book-card').forEach(e => e.remove());
  //myLibrary.forEach(displayBook);
  displayLibrary();
};
