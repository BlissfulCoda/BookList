// Book Constructor
function Book(author, title, isbn) {
  this.author = author;
  this.title = title;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `;
  list.appendChild(row);
};

UI.prototype.clearFields = function() {
  document.querySelector('#author').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#isbn').value = '';
};

UI.prototype.showAlert = function(message, className) {
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  container.insertBefore(div, form);
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 2500);
};

UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    if (confirm('Are You Sure')) {
      target.parentElement.parentElement.remove();
    }
  }
};

document.querySelector('#book-form').addEventListener('submit', function(e) {
  const author = document.querySelector('#author').value;
  title = document.querySelector('#title').value;
  isbn = document.querySelector('#isbn').value;

  const book = new Book(author, title, isbn);

  const bookUI = new UI();
  if (title === '' || author === '' || isbn === '') {
    bookUI.showAlert('Please Fill In All Fields', 'error');
  } else {
    bookUI.addBookToList(book);
    bookUI.clearFields();
    bookUI.showAlert('Book Successfully Added', 'success');
  }
  e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', function(e){
  const bookUI = new UI();
  bookUI.deleteBook(e.target);
  bookUI.showAlert('Book Deleted', 'delete');
  e.preventDefault();
});
