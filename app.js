// Variable to store the current value displayed on the calculator
let displayValue = '0';

// Function to update the display with the current value
function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

// Function to add a value to the current display value
function addToDisplay(value) {
  // If the current display value is '0', replace it with the new value
  if (displayValue === '0') {
    displayValue = value;
  } else {
    // Otherwise, append the new value to the existing display value
    displayValue += value;
  }
  // Update the display after adding the value
  updateDisplay();
}

// Function to clear the display and set it back to '0'
function clearDisplay() {
  displayValue = '0';
  // Update the display after clearing
  updateDisplay();
}

// Function to perform the calculation based on the current display value
function calculate() {
  try {
    // Use the Function constructor to evaluate the current display value
    const result = new Function('return ' + displayValue)();
    // Convert the result to a string and update the display
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    // If there's an error during calculation, display 'Error'
    displayValue = 'Error';
    updateDisplay();
  }
}
// Javascript Functionality ends here