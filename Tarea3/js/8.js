//* Declarar las variables de los inputs
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const hr = document.querySelector('hr');
const first_text = document.getElementById('first-text');
const second_text = document.getElementById('second-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular si es positivo o negativo y mostrarlo al usuario
function setAscend() {
  const numbers = [parseFloat(number1.value), parseFloat(number2.value)];
  ascend = numbers.sort((a, b) => b - a);
  first_text.textContent = 'Mayor: ' + numbers[0];
  second_text.textContent = 'Menor: ' + numbers[1];
  btn_total.hidden = true;
  number1.disabled = true;
  number2.disabled = true;
  hr.hidden = false;
  first_text.hidden = false;
  second_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  number1.value = '0';
  number2.value = '0';
  btn_total.hidden = false;
  number1.disabled = false;
  number2.disabled = false;
  hr.hidden = true;
  first_text.hidden = true;
  second_text.hidden = true;
  btn_clear.hidden = true;
}
