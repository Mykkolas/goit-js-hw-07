const input = document.getElementById("name-input")
const output = document.getElementById("name-output")



input.addEventListener("input", (event) => {
    const trimVal = event.currentTarget.value.trim()

    if (trimVal === "") {
    output.textContent = "Anonymous"
    }
    else {
    output.textContent = trimVal
    }
})