function showCalculation() {
  const calculation = JSON.parse(localStorage.getItem('calculation')) || '';
  const resultElement = document.querySelector('.js-show-result');
  resultElement.innerText = calculation;
}
const resultElement = document.querySelector('.js-show-result');
let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

function updateCalculation(value) {
  calculation += value;
  resultElement.innerText = calculation;
}

function evaluateCalculation() {
  calculation = eval(calculation);
  resultElement.innerText = calculation;

  localStorage.setItem('calculation', JSON.stringify(calculation))
}

function clearCalculation() {
  calculation = ' ';
  resultElement.innerText = calculation;
  localStorage.removeItem('calculation')
}
window.onload = showCalculation;