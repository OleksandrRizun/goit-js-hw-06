const rangeElem = document.getElementById ("font-size-control");
const textElem = document.getElementById ("text");

let handleInput = (e) => {
    textElem.style.fontSize = e.currentTarget.value + "px";
}

rangeElem.addEventListener("input", handleInput);