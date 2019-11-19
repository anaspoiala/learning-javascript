const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, previousResult, number) {
	const descr = `${previousResult} ${operator} ${number}`;
	outputResult(currentResult, descr);
}

function log(operation, previousResult, number, result) {
	const logEntry = {
		operation: operation,
		previousResult: previousResult,
		number: number,
		result: result
	};

	logEntries.push(logEntry);
	console.log(logEntries);
}

function add() {
	const enteredNumber = getUserInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteOutput("+", initialResult, enteredNumber);
	log('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
	const enteredNumber = getUserInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput("-", initialResult, enteredNumber);
	log('SUB', initialResult, enteredNumber, currentResult);
}

function multiply() {
	const enteredNumber = getUserInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteOutput("*", initialResult, enteredNumber);
	log('MUL', initialResult, enteredNumber, currentResult);
}

function divide() {
	const enteredNumber = getUserInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput("/", initialResult, enteredNumber);
	log('DIV', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);