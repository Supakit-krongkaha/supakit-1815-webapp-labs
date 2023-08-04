function readInput() {
    let inputList = [];
    let input = prompt('Enter a positive integer (or a negative integer to stop):');
    
    while (input >= 0) {
      let parsedInput = parseInt(input);
      if (!isNaN(parsedInput) && parsedInput > 0) {
        inputList.push(parsedInput);
      }
      input = prompt('Enter a positive integer (or a negative integer to stop):');
    }
    
    return inputList;
  }
  
  function displayStats(list) {
    if (list.length === 0) {
      alert('No positive integers were entered.');
      return;
    }
    
    let sum = 0;
    let min = list[0];
    let max = list[0];
    
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
      if (list[i] < min) {
        min = list[i];
      }
      if (list[i] > max) {
        max = list[i];
      }
    }
    
    let average = sum / list.length;
    
    alert(`Statistics:\nAverage: ${average}\nMinimum: ${min}\nMaximum: ${max}`);
  }
  
  function startApp() {
    let input = prompt("Enter an integer ");
    let inputList = readInput(input);
    displayStats(inputList);
  }

  startApp();