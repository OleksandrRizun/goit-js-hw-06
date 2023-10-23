function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function addElement (num) {
  let elem = document.createElement ("div");
  elem.style.width = 30 + 10 * num + "px";
  elem.style.height = 30 + 10 * num + "px";
  elem.style.backgroundColor = getRandomHexColor();
  return elem
}

function createBoxes (amount) {
  var arr = [];
  for (let i = 0; i < amount; i++){
    arr.push (addElement(i));
  }
  boxesElem.append(...arr)
}

function destroyBoxes (elem) {
  elem.innerHTML = "";
}

const boxesElem = document.getElementById("boxes");

const numberElem = document.querySelector ("[type=number]");
const createElem = document.querySelector("[data-create]");
const destroyElem = document.querySelector("[data-destroy]");

createElem.addEventListener ("click", () => createBoxes (numberElem.value));
destroyElem.addEventListener ("click", () => destroyBoxes (boxesElem))
