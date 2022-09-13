import data from "./data/harrypotter/data.js";

const booksPrint = document.getElementById('listBooks');
const fullBooks = data.books;
function createBook(books){
    return `<section class="cardBook">
    <br><strong>${books.title}</strong>
    </br><strong>Lançamento: </strong>${books.releaseDay}
    </br><strong>Autor: </strong>${books.author}
    </br><strong>Descrição: </strong>${books.description}
    </section>`
}
function displayBookList() {
booksPrint.innerHTML = fullBooks.map(createBook).join('');
}
displayBookList()
let btnTop = document.getElementById('btn-top')
btnTop.addEventListener('click', function buttonTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}