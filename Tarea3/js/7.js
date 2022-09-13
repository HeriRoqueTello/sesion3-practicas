//* Declarar las variables de los inputs
const number = document.getElementById('number');
const hr = document.querySelector('hr');
const result_text = document.getElementById('result-text');
const divided_text = document.getElementById('divide-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular si es positivo o negativo y mostrarlo al usuario
function testNumber() {
  if (parseInt(number.value) == 0) {
    alert('El número debe ser diferente de 0!');
    return false;
  } else {
    if (0 < parseInt(number.value)) {
      isEven();
      result_text.textContent = 'El número ' + number.value + ' es positivo';
    } else {
      result_text.textContent = 'El número ' + number.value + ' es negativo';
    }
  }
  btn_total.hidden = true;
  number.disabled = true;
  hr.hidden = false;
  result_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para saber si es par o impar
function isEven() {
  if (parseInt(number.value) !== parseFloat(number.value)) {
    divided_text.hidden = true;
  } else {
    divided_text.hidden = false;
    if (parseInt(number.value) % 2 == 0) {
      divided_text.textContent = 'El número ' + number.value + ' es Par';
    } else {
      divided_text.textContent = 'El número ' + number.value + ' es Impar';
    }
  }
}
//* Funcion para limpiar los input del form
function clearInput() {
  number.value = '0';
  btn_total.hidden = false;
  number.disabled = false;
  hr.hidden = true;
  result_text.hidden = true;
  divided_text.hidden = true;
  btn_clear.hidden = true;
}
