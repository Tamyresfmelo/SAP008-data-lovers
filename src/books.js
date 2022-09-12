import data from "./data/harrypotter/data.js";

const booksPrint = document.getElementById('listaBooks');
const fullBooks = data.books;
listBook;
function createBook(books){
    return `<card class="card">
    <br><strong> </strong>${books.title}
    </br><strong></strong>${books.releaseDay}
    </br><strong> </strong>${books.author}
    </br><strong></strong>${books.description}
    </card>`
}
function displayBookList() {
    listBook = fullBooks
    booksPrint.innerHTML = fullBooks.map(createBook).join('');
}
displayBookList()
console.log(displayBookList)