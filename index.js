let displayValue = '';

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function appendChar(char) {
  displayValue += char;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLastChar() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
  } catch (error) {
    displayValue = 'Erro';
  }
  
  updateDisplay();
}

updateDisplay();
