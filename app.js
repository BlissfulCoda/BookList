// Book Constructor
function Book(author, title, isbn){
    this.author = author;
    this.title = title;
    this.isbn = isbn
}

function UI(){};

UI.prototype.addBookToList = function(book){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `;
    list.appendChild(row)
}

document.querySelector('#book-form').addEventListener('submit', function(e){
    const author = document.querySelector('#author').value;
          title = document.querySelector('#title').value;
          isbn = document.querySelector('#isbn').value;
          

    const book = new Book(author, title, isbn);

    const bookUI = new UI();
    bookUI.addBookToList(book);
    e.preventDefault();
});