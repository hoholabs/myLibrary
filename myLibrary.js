// All of your book objects are going to be stored in a simple array, 
// so add a function to the script (not the constructor) 
// that can take user’s input and store the new book objects 
// into an array. Your code should look something like this:

let bookContainer = document.getElementById("book-container");
let dataPosition = 0;
let myLibrary = [];

function book(title,author,pages,read) {
  // the constructor...
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.position = dataPosition;
    // dataPosition++
}

function addBookToLibrary(title,author,pages,read) {
  // do stuff here
  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary('You','Joe Mama',69,true);
addBookToLibrary('The Hobbit','jrr','50',false);
addBookToLibrary('The Hobbit','jrr','50',false);
addBookToLibrary('The Hobbit','jrr','50',false);
// addBookToLibrary('The return','jrr','50',false);
//updateDisplay();
displayLibrary();


  // Write a function that loops through the array 
  // and displays each book on the page. You can display 
  // them in some sort of table, or each on their own “card”. 
  // It might help for now to manually add a few books to your 
  // array so you can see the display.




// function displayBook(book){
//   let displayedBook = document.createElement('div');
  
//   displayedBook.className = "book-card"; //create book card

//     //create divs for the book elements
//     let displayedBookTitle = document.createElement('div');
//     let displayedBookAuthor = document.createElement('div');
//     let displayedBookPages = document.createElement('div');
//     let displayedBookRead = document.createElement('div');
//     let displayedBookRemove = document.createElement('button'); //remove book button
//     //assign class names to the elements
//     displayedBookTitle.className = "book-title";
//     displayedBookAuthor.className = "book-author";
//     displayedBookPages.className = "book-pages";
//     displayedBookRead.className = "book-read";
//     displayedBookRemove.className = "book-remove";
//     //change text content of each element
//     displayedBookTitle.textContent = book.title;
//     displayedBookAuthor.textContent = book.author;
//     displayedBookPages.textContent = `${book.pages} pages`;
//     displayedBookRead.textContent = book.read;
//     displayedBookRemove.textContent = "x";
    
//     //add remove eventlistener
//     console.log(book.position);
//     displayedBookRemove.addEventListener("click", function() {
//       myLibrary.splice(book.position, 1);
//       updateDisplay();
//     });

//     //add each element to the book card
//     displayedBook.appendChild(displayedBookTitle);
//     displayedBook.appendChild(displayedBookAuthor);
//     displayedBook.appendChild(displayedBookPages);
//     displayedBook.appendChild(displayedBookRead);
//     displayedBook.appendChild(displayedBookRemove);


//   bookContainer.appendChild(displayedBook)

// }

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

// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book 
// objects in some way. One easy solution is giving them a data-attribute 
// that corresponds to the index of the library array.

//done above

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that
//  toggles a book’s read status on your Book prototype instance.
