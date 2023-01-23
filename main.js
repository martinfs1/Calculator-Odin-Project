console.log("Hello Calculator.");

const add = (a, b) => {
	return a + b;
};
console.log(add(2, 3));

const subtract = (a, b) => {
	return a - b;
};
console.log(subtract(3, 2));

const multiply = (a, b) => {
	return a * b;
};
console.log(multiply(2, 3));

const divide = (a, b) => {
	return a / b;
};
console.log(divide(10, 2));

const operate = (op, a, b) => {
	return add(a, b);
};
console.log(operate("/", 2, 3));

const $dsply = document.querySelector("#dsply");
function populateDisplay(firstOperands, secondOperands) {
	$dsply.textContent = firstOperands;
}

// trying to populate the display in order to do a Mathematic operation.
let firstOperands = []
let secondOperands = []
let operator;
document.addEventListener('click', (e) => {

	if (e.target.textContent === 'clear') {
		$dsply.textContent = 0;
		firstOperands = [];
		secondOperands = [];
	} else if ((e.target.textContent === '+')
		|| (e.target.textContent === '-')
		|| (e.target.textContent === '*')
		|| (e.target.textContent === '%')) {
		operator = e.target.textContent;
	} else if ((operator) && (firstOperands.length >= 0)) {

		secondOperands.push(Number(e.target.textContent))
		populateDisplay(secondOperands.join(''));
		console.log(secondOperands);

	} else {
		firstOperands.push(Number(e.target.textContent))
		populateDisplay(firstOperands.join(''));
		console.log(firstOperands);
	}

})

// operate(operator, firstOperands, secondOperands)




