console.log("Hello Calculator.");

let firstOperands = '';
let secondOperands = '';
let operator;
let result;
let interResult;
let dot
const $dotBtn = document.querySelector('#btnDot')
const $dsply = document.querySelector("#dsply");

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
	return a * b;
};

function divide(a, b) {
	if (b === 0) {
		return 'Error';
	} else {
		return a / b;
	}

};

const operate = (op, a, b) => {
	switch (op) {
		case '+':
			return add(Number(a), Number(b));
		case '-':
			return subtract(Number(a), Number(b))
		case 'x':
			return multiply(Number(a), Number(b))
		case '÷':
			return divide(Number(a), Number(b))
	}
};

function updateDisplay(value) {
	$dsply.textContent = value;
}

document.addEventListener('click', (e) => {
	const btnClicked = e.target.textContent;

	if (!isNaN(btnClicked) || btnClicked === '.') {
		if ((!dot) && (btnClicked === '.') && (firstOperands || secondOperands)) {
			if (operator) {
				secondOperands += btnClicked;
			} else {
				firstOperands += btnClicked;
			}
			$dotBtn.setAttribute('disabled', true)
		} else if (operator) {
			secondOperands += btnClicked

		} else {
			firstOperands += btnClicked;
		}

	} else if ((btnClicked === '+') || (btnClicked === '-') || (btnClicked === 'x') || (btnClicked === '÷')) {
		$dotBtn.disabled = false;
		if (operator) {
			interResult = operate(operator, firstOperands, secondOperands)
			firstOperands = interResult;
			secondOperands = '';
		}
		operator = btnClicked;
	} else if (btnClicked === '=') {
		result = operate(operator, firstOperands, secondOperands);
	} else if (btnClicked === 'clear') {
		firstOperands = '';
		secondOperands = '';
		interResult = '';
		operator = '';
		result = '';
		$dotBtn.disabled = false;
		dot = "";

	}
	updateDisplay(result || secondOperands || firstOperands || interResult || 0)
});
