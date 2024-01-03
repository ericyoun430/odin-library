

const myLibrary = [];

function Book(name, author, length, read) {
    this.name = name;
    this.author = author;
    this.length = length;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(bookName, bookAuthor, bookLength, read);
    myLibrary.push(newBook);
}

function displayBook() {
    for (book in myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");

        const card_header = document.createElement("div");
        card_header.classList.add("card-header");

    }
}

const cardContainer = document.querySelector('.card-container');
const addToLibrary = document.querySelector('.open-popup-btn');


addToLibrary.addEventListener('click', () => {

    const popup = document.querySelector('.popup');
    if (!popup.classList.contains("show")) {
        popup.classList.add("show");
    }
})


const addBook = document.querySelector('.form-submit');
const bookName = document.querySelector('#book_name');
const bookAuthor = document.querySelector('#book_author');
const bookLength = document.querySelector('#book_length');
const read = document.querySelector('#book_read_status');

addBook.addEventListener('click', addBookToLibrary);

