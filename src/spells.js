import data from "./data/harrypotter/data.js";
const spellsPrint = document.getElementById('listSpells');
const fullSpells = data.spells;
function createSpells(spells){
    return `<card class="cardSpells">
    <br><strong>Name: </strong>${spells.name}
    </br><strong>Tipo de feitiço: </strong>${spells.spell_type}
    </br><strong>Descrição: </strong>${spells.description}
    </card>`
}
function displaySpellsList() {
spellsPrint.innerHTML = fullSpells.map(createSpells).join('');
}
displaySpellsList()
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