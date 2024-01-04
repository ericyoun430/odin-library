const myLibrary = [];

function Book(id, name, author, length, read) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.length = length;
    this.read = read;
}

const addToLibrary = document.querySelector('.open-popup-btn');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');

addToLibrary.addEventListener('click', () => {
    if (!popup.classList.contains("show")) {
        popup.classList.add("show");
    }
    // body.classList.
    // console.log(body.childNodes.contains("popup"));
    body.childNodes.forEach((child) => {
        try {
            if (!child.classList.contains("popup")) {
                child.classList.add("blur");
            }
        } catch (error) {
            
        }
    })
});

const cardContainer = document.querySelector('.card-container');
const addBook = document.querySelector('.form-submit');
let bookCount = 0;

addBook.addEventListener('click', () => {
    const formData = new FormData(document.querySelector('form'));
    const bookName = formData.get("book_name");
    const bookAuthor = formData.get("book_author");
    const bookLength = formData.get("book_length");
    const read = formData.has("book_read_status") ? true : false;
    const newBook = new Book(bookCount, bookName, bookAuthor, bookLength, read);
    bookCount+=1;

    // console.log(newBook.name +':' + newBook.author + ',' + newBook.length + ',' + newBook.read);
    myLibrary.push(newBook);
    popup.classList.remove("show");
    displayLibrary();
    body.childNodes.forEach((child) => {
        try {
            if (!child.classList.contains("popup")) {
                child.classList.remove("blur");
            }
        } catch (error) {
            
        }
    })
});

function displayLibrary() {
    while (cardContainer.hasChildNodes()) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
    myLibrary.forEach((book) => {
        // console.log(book);
        const card = document.createElement("div");
        card.classList.add("card");

        const readBtnStatus = book.read ? "Unread" : "Read";

        card.innerHTML = `
        <div class="card-header">
            <span class="card-title">${book.name}</span>
        ` + 
        //if read checkbox, otherwise non checkbox
        (book.read ? 
        `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M713-600 600-713l56-57 57 57 141-142 57 57-198 198ZM200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Z"/></svg>`
        :
        `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-40v-640q0-33 23.5-56.5T200-760h400q33 0 56.5 23.5T680-680v640L400-160 120-40Zm80-122 200-86 200 86v-518H200v518Zm560 2v-680H240v-80h520q33 0 56.5 23.5T840-840v680h-80ZM200-680h400-400Z"/></svg>`
        ) + 
        `
        </div>
        <div class="card-body">
            <span class="card-author">${book.author}</span>
            <span class="card-length">${book.length}</span>
        </div>
        `;
        // <div class="card-buttons">
        //     <button type="button" class="card-button read-btn">${readBtnStatus}</button>
        //     <button type="button" class="card-button delete-btn">Delete</button>
        // </div>
        
        const cardButtons = document.createElement("div");
        cardButtons.classList.add("card-buttons");

        const readBtn = document.createElement("button");
        readBtn.classList.add("card-button", "read-btn");
        readBtn.setAttribute("type","button");
        readBtn.textContent = (book.read ? "Unread" : "Read");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("card-button", "delete-btn");
        deleteBtn.setAttribute("type","button");
        deleteBtn.textContent = "Delete";

        cardButtons.appendChild(readBtn);
        cardButtons.appendChild(deleteBtn);
        card.appendChild(cardButtons);
        cardContainer.appendChild(card);
        
        readBtn.addEventListener('click', () => {
            //if book is read then we are changing to unread, so it should say read
            //add appropriate icon to represent if the book is currently read
            if (book.read) {
                readBtn.nodeValue = "Read";
                card.querySelector(".card-header").innerHTML = `
                <span class="card-title">${book.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-40v-640q0-33 23.5-56.5T200-760h400q33 0 56.5 23.5T680-680v640L400-160 120-40Zm80-122 200-86 200 86v-518H200v518Zm560 2v-680H240v-80h520q33 0 56.5 23.5T840-840v680h-80ZM200-680h400-400Z"/></svg>
                `;
                book.read = false;
            } else {
                readBtn.nodeValue = "Unread";
                card.querySelector(".card-header").innerHTML = `
                <span class="card-title">${book.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M713-600 600-713l56-57 57 57 141-142 57 57-198 198ZM200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Z"/></svg>
                `;
                book.read = true;
            }
        })

        //delete button
        deleteBtn.addEventListener('click', () => {
            card.remove();
            for (let a = 0; myLibrary.length; a++) {
                if (myLibrary[a] === book) {
                    myLibrary.splice(a,1);
                    break;
                }
            }
        })


    })
}

//remove node if press remove, change icon if read and change button text
// const deleteBtnNodes = document.querySelectorAll('.delete-btn');
// const readBtnNodes = document.querySelectorAll('.read-btn');

// for (let i = 0; i < deleteBtnNodes.length; i++) {
//     const nodeToBeDeleted = deleteBtnNodes[i];
//     const changeStatusOfNode = readBtnNodes[i];

//     deleteBtnNodes[i].addEventListener('click',()=> {
//         nodeToBeDeleted.parentNode.parentNode.remove();
//     })

    

// }
