/**Calculator**/
let firstOperandPrompt = prompt('Please enter your first operand', '0');
let secondOperandPrompt = prompt('Please enter your second operand', '0');
let operationPrompt = prompt('Please enter the operation you would like to perform i.e + ,-, *, / ');

let firstNumber = parseInt(firstOperandPrompt);
let secondNumber = parseInt(secondOperandPrompt);
let result = -1;

if (operationPrompt === '+') {
    if (Number.isFinite(firstNumber) && Number.isFinite(secondNumber)) {
        result = firstNumber + secondNumber;
    }
    console.log(firstOperandPrompt + operationPrompt + secondOperandPrompt + ' = ' + result);

} else if (operationPrompt === '-') {

    if (Number.isFinite(firstNumber) && Number.isFinite(secondNumber)) {
        result = firstNumber - secondNumber;
    }
    console.log(firstOperandPrompt + operationPrompt + secondOperandPrompt + ' = ' + result);
} else if (operationPrompt === '*') {

    if (Number.isFinite(firstNumber) && Number.isFinite(secondNumber)) {
        result = firstNumber * secondNumber;
    }
    console.log(firstOperandPrompt + operationPrompt + secondOperandPrompt + ' = ' + result);
} else if (operationPrompt === '/') {

    if (Number.isFinite(firstNumber) && Number.isFinite(secondNumber)) {
        result = firstNumber / secondNumber;

    }
    console.log(firstOperandPrompt + operationPrompt + secondOperandPrompt + ' = ' + result);
} else {
    console.log('Sorry we could not perfrom your operation !');
}