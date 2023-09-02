const upperField = document.querySelector('.upper-field');
const lowerField =  document.querySelector('.lower-field');

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const OPERATIONS = ["add", "subtract", "multiply", "divide"];

let firstNum = '';
let secondNum = '';
let operator;

function operate(operator, num1, num2) {
	let a = Number(num1);
	let b = Number(num2);
	if (operator === '+') return `${a + b}`;
	else if (operator === '-') return `${a - b}`;
	else if (operator === '*') return `${a * b}`;
	else if (operator === '/') {
		if (b === 0) return 'CANNOT DIVIDE BY ZERO';
		else retrn `${a / b}`;
	}
	else return;
}

function updateLowerField() {
	if (operator !== undefined && secondNum !== '') lowerField.textContent = `${firstNum}${operator}${secondNum}`;
	else lowerField.textContent = firstNum;
}

function updateUpperField() {
	upperField.textContent = `${firstNum}${operator}${secondNum}`;
}


function inputNum(e) {
	const num = e.currentTarget['value'];
	if (operator === undefined) firstNum = firstNum === '0' ? num : firstNum + num;
	else secondNum = secondNum + num;
	updateLowerField();
}

function inputOperator(e) {
	if (secondNum !== '') {
		equals();
	}
	if (firstNum === '') firstNum = '0';
	operator = e.currentTarget['value'];
	updateLowerField()
}

function equals() {
	if (operator !== undefined && secondNum !== '') {
		updateUpperField();
		firstNum = `${operate(operator, firstNum, secondNum)}`;
		secondNum = '';
		operator = undefined;
		updateLowerField();
	}
}

function clear() {
	upperField.textContent = '';
	lowerField.textContent = '';
	firstNum = '';
	secondNum = '';
	operator = undefined;
}

function deleteInput() {
	if (secondNum !== '') secondNum = secondNum.slice(0, secondNum.length - 1);
	else if (operator !== undefined) operator = undefined;
	else if (firstNum !== '') firstNum = firstNum.slice(0, firstNum.length - 1);
	updateLowerField();
}

function percent() {
	if (secondNum !== '') secondNum = `${Number(secondNum) / 100}`;
	else if (firstNum !== '') firstNum = `${Number(firstNum) / 100}`;
	updateLowerField();
}

function decimal() {
	return;
}

document.querySelectorAll('.number').forEach(num => num.addEventListener('click', inputNum));
document.querySelectorAll('.operation').forEach(op => op.addEventListener('click', inputOperator));
document.querySelector('button[value=equals]').addEventListener('click', equals);
document.querySelector('button[value=clear]').addEventListener('click', clear);
document.querySelector('button[value=delete]').addEventListener('click', deleteInput);
document.querySelector('button[value=percent]').addEventListener('click', percent);
document.querySelector('button[value=decimal').addEventListener('click', decimal);