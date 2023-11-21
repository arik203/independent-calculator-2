function clearAll() {
     var display = document.getElementsByName('display')[0];
     display.value = '';
}


function clearDisplay() {
     var display = document.getElementsByName('display')[0];
     display.value = display.value.slice(0, -1);
}


function appendToDisplay(value) {
     var display = document.getElementsByName('display')[0];
     display.value += value;

     // Check if the percentage symbol is appended and calculate percentage
     if (value === '%') {
          try {
               display.value = (eval(display.value) / 100).toFixed(10);
          } catch (error) {
               display.value = 'Error';
          }
     }
}


function appendToDisplay(value) {
     var display = document.getElementsByName('display')[0];
     display.value += value;
}

function add() {
     appendToDisplay('+');
}

function subtract() {
     appendToDisplay('-');
}

function multiply() {
     appendToDisplay('x'); // Use 'x' for multiplication
}

function divide() {
     appendToDisplay('/');
}

function calculate() {
     var display = document.getElementsByName('display')[0];

     try {
          // Replace 'x' with '*' for proper evaluation
          var expression = display.value.replace(/x/g, '*');

          // Evaluate the expression
          var result = eval(expression);

          // Update the display with the result
          display.value = result;
     } catch (error) {
          display.value = 'Error';
     }
}

// Error handling for non-numeric input
function handleInput(value) {
     var display = document.getElementsByName('display')[0];
     try {
          // Try to append the value to the display
          appendToDisplay(value);
     } catch (error) {
          // If an error occurs, display an error message
          display.value = 'Error!';
     }
}













function appendToDisplay(value) {
     var display = document.getElementsByName('display')[0];

     if (value === '√') {
          let currentValue = parseFloat(display.value);
          if (!isNaN(currentValue)) {
               let result = Math.sqrt(currentValue);
               display.value = result;
          } else {
               display.value = 'Error';
          }
     } else {
          display.value += value;
     }
}

