const bookForm = document.getElementById('bookForm');
const bookTable = document.querySelector('#bookTable tbody');
const searchInput = document.getElementById('search');

let books = [];

bookForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
const genre = document.getElementById('genre').value;
const status = document.getElementById('status').value;
  const book = { title, author, year, genre, status };
  books.push(book);
  displayBooks(books);
  bookForm.reset();
});

function displayBooks(bookList) {
  bookTable.innerHTML = '';
  bookList.forEach((book, index) => {
    const row = `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td><button onclick="deleteBook(${index})">Delete</button></td>
    </tr>`;
    bookTable.innerHTML += row;
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchValue)
  );
  displayBooks(filteredBooks);
});