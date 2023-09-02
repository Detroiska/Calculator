let firstNum;
let secondNum;
let operator;

function operate(operator, num1, num2) {
	if (operator === 'add') return num1 + num2;
	else if (operator === 'subtract') return num1 - num2;
	else if (operator === 'multiply') return num1 * num2;
	else if (operator === 'divide') return num1 / num2;
	else return;
}