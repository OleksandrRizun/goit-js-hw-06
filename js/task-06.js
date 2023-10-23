let validationInput = document.getElementById ("validation-input");

let handleValidation = (elem) => {
    let numberNeeded = +elem.currentTarget.getAttribute("data-length");
    let numberValue = elem.currentTarget.value.length;
    if (numberNeeded === numberValue) {
        elem.currentTarget.classList.add("valid")
        elem.currentTarget.classList.remove("invalid")
    }
    else {
        elem.currentTarget.classList.add("invalid")
        elem.currentTarget.classList.remove("valid")
    }
}

validationInput.addEventListener("blur", handleValidation)