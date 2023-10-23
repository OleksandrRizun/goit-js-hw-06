let counterValue = 0;

const counterElement = document.getElementById ("value");
const pageButtons = document.getElementsByTagName ("button");
const leftButton = pageButtons [0];
const rightButton = pageButtons [1];

const handleClick = (number) => {
    counterValue += number;
    counterElement.textContent = counterValue;
}

leftButton.addEventListener ("click", handleClick.bind(this, -1))
rightButton.addEventListener ("click", handleClick.bind(this, 1))