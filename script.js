let displayValue = '';
let operator = '';
let firstOperand = '';
let waitingForSecondOperand = false;

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = '';
        waitingForSecondOperand = false;
    }
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
        return;
    }
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = displayValue;
    waitingForSecondOperand = true;
}

function calculate() {
    let result = '';
    const secondOperand = displayValue;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = '';
    updateDisplay();
}
