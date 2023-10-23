function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick (showColor) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  showColor.textContent = color;
}

const spanElem = document.getElementsByClassName ("color")[0];

const buttonElem = document.getElementsByClassName("change-color")[0];
buttonElem.addEventListener("click", handleClick.bind(this, spanElem))
