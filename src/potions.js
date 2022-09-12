import data from "./data/harrypotter/data.js";
const potionsPrint = document.getElementById('listPotions');
const fullPotions = data.potions;
function createPotions(potions){
    return `<section class="cardPotions">
    <br><strong>Nome: </strong>${potions.name}
    </br><strong>Descrição: </strong>${potions.description}
    </section>`
}
function displayPotionList() {
potionsPrint.innerHTML = fullPotions.map(createPotions).join('');
}
displayPotionList()
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