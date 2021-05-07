
function getOperator(message) {
        let operator;
        let error;
        do {
          operator = prompt(message);
          error = (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/');
          if (error) {
            alert( ` the entered value ${operator} is not an arithmetic character `);
          }
  }
  while (error);
  return operator;
}

function getNumber(message) {
  let result = prompt(message);
  while (isNaN(result)) {
    alert(`${result}this is not a number`);
    result = prompt(message);
  }
  return result;
}

let validOperator = getOperator('enter arithmetic action (options: "+", "-", "*", "/")');
let firstNumber = +getNumber('enter the first nbmber');
let secondNumber = +getNumber('enter the second number');
let calculation;

  switch (validOperator) {
  case '+': calculation = firstNumber + secondNumber;
  break;
  case '-': calculation = firstNumber - secondNumber;
  break;
  case '*': calculation = firstNumber * secondNumber;
  break;
  case '/': calculation = firstNumber / secondNumber;
  break;
  }
   alert( ` ${firstNumber}${ validOperator}${secondNumber}=${calculation} ` );



