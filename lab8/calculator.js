const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('?add|subtract ', (operation) => {
  if (operation !== 'add' && operation !== 'subtract') {
    console.log('Unknown operator. Please use "add" or "subtract".');
    rl.close();
  } else {
    rl.question('Enter the first number: ', (num1) => {
      rl.question('Enter the second number: ', (num2) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
          console.log('Please enter two numbers.');
        } else {
          let result;
          if (operation === 'add') {
            result = number1 + number2;
          } else {
            result = number1 - number2;
          }
          console.log(`Result of ${operation} ${number1} and ${number2} is: ${result}`);
        }

        rl.close();
      });
    });
  }
});

