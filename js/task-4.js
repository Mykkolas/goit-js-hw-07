const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", (e) => {
e.preventDefault()
    const form = e.target
    const email = form.elements.email.value
    const password = form.elements.password.value

    if (email === "" || password === "") {
        alert("All form fields must be filled in!")
    }

    else {
        const data = {
            email: email.trim(),
            password: password.trim()
        }
        console.log(data);
        alert("You have successfully logged in!")
        loginForm.reset()
    }

})