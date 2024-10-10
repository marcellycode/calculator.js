const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator-keys');
let display = document.querySelector('.display');
let history = document.querySelector('.history');

let firstValue = null;
let operator = null;
let secondValue = null;

function mensage(e) {
    if (e.target.matches('button')) {
        const key = e.target; 
        const action = key.dataset.action; 
        const keyContent = key.textContent; 
        const displayedNum = display.textContent;
        
        
        if (!action) {
            display.innerText = displayedNum === '0' ? keyContent : displayedNum + keyContent;
        } 
      
       
        else if (action === 'add' || action === 'subtract' || action === 'divide' || action === 'mult' || action === 'porcen') {
            firstValue = displayedNum;
            operator = action; 
            history.innerText = firstValue + ' ' + keyContent; 
            display.innerText = '0'; 
        }
        
        
        else if (action === 'equal') {
            secondValue = displayedNum;
            let result = Calculate(firstValue, operator, secondValue); 
            display.innerText = result;
            history.innerText = firstValue + " " + operatorToSymbol(operator) + ' ' + secondValue + ' = ';
        }
        
        
        else if (action === 'decimal') {
          if (!displayedNum.includes(',')) {
            display.innerText = displayedNum + ',';
          }
        }
        
      
        else if (action === 'clear-all') {
            display.innerText = '0'; 
            history.innerText = ''; 
            firstValue = null;
            operator = null;
            secondValue = null;
        }
        
       
        else if (action === 'clear') {
            display.innerText = displayedNum.slice(0, -1) || '0';
        }
    }
}

function Calculate(firstValue, operator, secondValue) {
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if (operator === 'add') return firstValue + secondValue;
    if (operator === 'subtract') return firstValue - secondValue;
    if (operator === 'divide') return firstValue / secondValue;
    if (operator === 'mult') return firstValue * secondValue;
    if (operator === 'porcen') return (firstValue / 100) * secondValue;
}

function operatorToSymbol(action) {
    switch(action) {
        case 'add': return '+';
        case 'subtract': return '-';
        case 'mult': return '*';
        case 'divide': return '/';
        case 'porcen': return '%';
        default: return ''; 
    }
}

keys.addEventListener('click', mensage, true);
