console.log("Hello Calculator.");

const $dsply = document.querySelector("#dsply");
let firstOperands = []
let secondOperands = []
let numbersToOperate1;
let numbersToOperate2;
let operator;
let result1 = 0;
;

const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const multiply = (a, b) => {
	return a * b;
};

const divide = (a, b) => {
	return a / b;
};

const operate = (op, a, b) => {
	let sign = op;
	switch (sign) {
		case '+':
			return add(Number(a), Number(b));
			break;
		case '-':
			return subtract(a, b)
			break
		case 'x':
			return multiply(a, b)
			break
		case '÷':
			return divide(a, b)
			break
		default:
			break;
	}
};

document.addEventListener('click', (e) => {
	let btnClicked = e.target.textContent;
	try {
		switch (true) {
			case ((btnClicked === '+') || (btnClicked === '-')
				|| (btnClicked === 'x') || (btnClicked === '÷')):
				operator = btnClicked
				break;
			case ((btnClicked >= 0) && (btnClicked <= 9) && (!operator)):
				firstOperands.push(Number(btnClicked))
				numbersToOperate1 = firstOperands.join('');
				$dsply.textContent = numbersToOperate1;
				break
			case (operator) && (firstOperands.length > 0) && (btnClicked !== '=') && (btnClicked !== 'clear'):
				$dsply.textContent = " ";
				secondOperands.push(Number(btnClicked))
				numbersToOperate2 = secondOperands.join('');
				$dsply.textContent = numbersToOperate2;
				break
			case ((btnClicked === '=') && (numbersToOperate1.length >= 0) && (numbersToOperate2.length >= 0)):
				$dsply.textContent = "0"
				result1 = operate(operator, numbersToOperate1, numbersToOperate2)
				$dsply.textContent = result1;
				break
			case (btnClicked === 'clear'):
				$dsply.textContent = 0;
				firstOperands = [];
				secondOperands = [];
				numbersToOperate1 = ""
				numbersToOperate2 = ""
				operator = ""
				break;
		}
	} catch (error) {
		console.log(error);
	}

})









