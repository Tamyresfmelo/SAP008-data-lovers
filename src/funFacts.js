import data from "./data/harrypotter/data.js";

const funFactsPrint = document.getElementById('listfunFacts');
const fullfunFacts = data.funFacts;
function createfunFact(funFacts){
    return `<section class="cardfunFacts">
    <br><strong>Sobre: </strong>${funFacts.type}
    </br><strong>Fatos ou curiosidades: </strong>${funFacts.content}
    </section>`
}
function displayfunFactsList() {
    funFactsPrint.innerHTML = fullfunFacts.map(createfunFact).join('');
}
displayfunFactsList()
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