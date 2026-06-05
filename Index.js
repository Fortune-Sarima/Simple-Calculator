const display = document.getElementById("display");
const buttons =document.getElementsByClassName("btn");
let isCalculated = false;
const operators = ["+", "-", "*", "/"];

function appendtodisplay(input) {
    if (isCalculated) {
        isCalculated = false;
        if (operators.includes(input)){
            display.value += input;
            return;
        }
        display.value = input;
        return;
    }
        
        display.value += input;


};

function clearDisplay() {
    display.value = "";
    isCalculated = false
};

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
};

function calculate() {
    try {
        display.value = eval(display.value);
        isCalculated = true;
        }
        catch (error) {
         display.value = "Invalid syntax";
         isCalculated = true;
    }


};














































































// let display = document.getElementById('display');
// let currentInput = '0';
// let previousInput = '';
// let operator = null;
// let shouldResetDisplay = false;

// function updateDisplay() {
//     display.value = currentInput;
// }

// function appendNumber(number) {
//     if (shouldResetDisplay) {
//         currentInput = number;
//         shouldResetDisplay = false;
//     } else {
//         if (currentInput === '0' && number !== '.') {
//             currentInput = number;
//         } else {
//             currentInput += number;
//         }
//     }
//     updateDisplay();
// }

// function appendOperator(op) {
//     if (operator !== null && !shouldResetDisplay) {
//         calculate();
//     }
//     previousInput = currentInput;
//     operator = op;
//     shouldResetDisplay = true;
// }

// function appendDecimal() {
//     if (shouldResetDisplay) {
//         currentInput = '0.';
//         shouldResetDisplay = false;
//     } else if (!currentInput.includes('.')) {
//         currentInput += '.';
//     }
//     updateDisplay();
// }

// function calculate() {
//     if (operator === null || shouldResetDisplay) {
//         return;
//     }

//     let result;
//     const prev = parseFloat(previousInput);
//     const current = parseFloat(currentInput);

//     switch (operator) {
//         case '+':
//             result = prev + current;
//             break;
//         case '-':
//             result = prev - current;
//             break;
//         case '*':
//             result = prev * current;
//             break;
//         case '/':
//             result = current !== 0 ? prev / current : 0;
//             break;
//         default:
//             return;
//     }

//     currentInput = String(result);
//     operator = null;
//     previousInput = '';
//     shouldResetDisplay = true;
//     updateDisplay();
// }

// function clearDisplay() {
//     currentInput = '0';
//     previousInput = '';
//     operator = null;
//     shouldResetDisplay = false;
//     updateDisplay();
// }

// function deleteLastChar() {
//     if (currentInput.length > 1) {
//         currentInput = currentInput.slice(0, -1);
//     } else {
//         currentInput = '0';
//     }
//     updateDisplay();
// }
