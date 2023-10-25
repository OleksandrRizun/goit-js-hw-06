const formElem = document.getElementsByClassName ("login-form")[0];

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (!email.value || !password.value) {
        alert ("Please fill the fields in");
        return
    }
    const user = {
        email: email.value, 
        password: password.value,
    }
    console.log(user);
    email.value = "";
    password.value = "";
}

formElem.addEventListener("submit", handleSubmit);