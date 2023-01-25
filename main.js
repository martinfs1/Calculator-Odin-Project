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
let firstOperands = []
let secondOperands = []
let operator;
let result

// trying to populate the display in order to do a Mathematic operation.

document.addEventListener('click', (e) => {

	let btnClicked = e.target.textContent;

	try {

		switch (true) {
			case (btnClicked === 'clear'):
				$dsply.textContent = 0;
				firstOperands = [];
				secondOperands = [];
				break;
			case (btnClicked === '+'):
			case (btnClicked === '-'):
			case (btnClicked === '*'):
			case (btnClicked === '/'):
				operator = e.target.textContent;
				console.log('operator');
				break;
			case (operator) && (firstOperands.length >= 0) && (btnClicked !== '='):
				$dsply.textContent = "";
				secondOperands.push(Number(e.target.textContent))
				populateDisplay(secondOperands.join(''));
				console.log(secondOperands);
				break
			case (btnClicked >= 0 && btnClicked <= 9):
				firstOperands.push(Number(btnClicked))
				populateDisplay(firstOperands.join(''));
				console.log(firstOperands);
				break
			case ((btnClicked === '=') && (firstOperands.length >= 0) && (secondOperands.length >= 0)):
				console.log('Equal');
				break

		}
	} catch (error) {
		console.log(error);
	}

})


// operate(operator, firstOperands, secondOperands)





