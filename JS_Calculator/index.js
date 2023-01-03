console.log("Heelo")

const buttons = document.querySelectorAll("button")
const screenDisplay = document.querySelector(".screen")

console.log(buttons)
let calculatation = []
let addedCalculation
function calculate(button) {
	console.log(button)

	const value = button.textContent

	if (value === "Clear") {
		calculatation = []
		screenDisplay.textContent = "."
	} else if (value === "=") {
		screenDisplay.textContent = eval(addedCalculation)
	} else {
		calculatation.push(value)

		addedCalculation = calculatation.join("")

		screenDisplay.textContent = addedCalculation

		console.log(calculatation)
	}
}
buttons.forEach((button) =>
	button.addEventListener("click", () => {
		calculate(button)
	})
)
