const form = document.getElementById("quest")
const a = document.getElementById("number1")
const b = document.getElementById("number2")
const message = document.getElementById("texto")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    if (b.value > a.value) {
        message.innerHTML = "O número b é maior que a."
    } else {
        message.innerHTML = "O número b não é maior que a."
    }
})
