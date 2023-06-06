let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  displayBooks();
  resetForm();
}

function displayBooks() {
  const libraryContainer = document.getElementById('library');
  libraryContainer.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('h3');
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = 'Pages: ' + book.pages;
    bookCard.appendChild(pages);

    const readStatus = document.createElement('p');
    readStatus.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');
    bookCard.appendChild(readStatus);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(i);
    });
    bookCard.appendChild(removeButton);

    const readToggleButton = document.createElement('button');
    readToggleButton.textContent = 'Toggle Read';
    readToggleButton.addEventListener('click', () => {
      toggleReadStatus(i);
    });
    bookCard.appendChild(readToggleButton);

    libraryContainer.appendChild(bookCard);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

function resetForm() {
  document.getElementById('book-form').reset();
}

document.getElementById('new-book-btn').addEventListener('click', () => {
  const newBookForm = document.getElementById('new-book-form');
  newBookForm.classList.toggle('hidden');
});

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

// Manually add some books for testing
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, true);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, false);
const book3 = new Book('1984', 'George Orwell', 328, true);

myLibrary.push(book1, book2, book3);

displayBooks();
