const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//Show input Error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = "form-control error"
	const small = formControl.querySelector("small")
	small.innerHTML = message
}

//Show Success message
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = "form-control success"
}

//Check Email is required

// Check email is valid
function checkEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(String(email).toLowerCase())
}

// getFieldName -- make first letter uppper case
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Check Required fields
function checkRequired(inputArray) {
	inputArray.forEach(function (input) {
		if (input.value.trim() === "") {
			showError(input, `${getFieldName(input)} required`)
		} else {
			showSuccess(input)
		}
	})
}

//Event Listener
form.addEventListener("submit", function (e) {
	e.preventDefault()

	checkRequired([username, email, password, password2])
})

// Old Way
// if (username.value === "") {
// 	showError(username, "Username is required")
// } else {
// 	showSuccess(username)
// }
// if (email.value === "") {
// 	showError(email, "Email is required")
// } else if (!checkEmail(email.value)) {
// 	showError(email, "Email is not valid")
// } else {
// 	showSuccess(email)
// }
// if (password.value === "") {
// 	showError(password, "password is required")
// } else {
// 	showSuccess(password)
// }
// if (password2.value === "") {
// 	showError(password2, "passwordb 2 is required")
// } else {
// 	showSuccess(password2)
// }
