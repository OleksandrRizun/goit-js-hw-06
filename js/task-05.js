const inputElement = document.getElementById("name-input");
const messageElement = document.getElementById ("name-output");

const handleEvent = (event) => {
    messageElement.textContent = event.currentTarget.value;
    if (event.currentTarget.value == "") {
        messageElement.textContent = "Anonymous";
    }
}

inputElement.addEventListener ("input", handleEvent);