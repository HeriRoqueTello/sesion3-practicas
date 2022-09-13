//* Declarar las variables de los inputs
const minutes_input = document.getElementById('minutes');
const hr = document.querySelector('hr');
const days_text = document.getElementById('days-text');
const hrs_text = document.getElementById('hrs-text');
const minutes_text = document.getElementById('minutes-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
var minutes = 0;
var hours = 0;
var days = 0;
//* Funcion para colocar los dias, horas y minutos para mostrarlo al usuario
function setTime() {
  toTime();
  days_text.textContent = 'Días: ' + days;
  hrs_text.textContent = 'Horas: ' + hours;
  minutes_text.textContent = 'Minutos: ' + minutes;
  btn_total.hidden = true;
  minutes_input.disabled = true;
  hr.hidden = false;
  days_text.hidden = false;
  hrs_text.hidden = false;
  minutes_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para calcular el tiempo
function toTime() {
  var totalMinutes = parseInt(minutes_input.value);
  minutes = Math.floor(totalMinutes % 60);
  hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  days = Math.floor(totalMinutes / (60 * 24));
  console.log('Dias: ' + days, 'horas: ' + hours, 'minutos: ' + minutes);
}
//* Funcion para limpiar los input del form
function clearInput() {
  minutes_input.value = '0';
  btn_total.hidden = false;
  minutes_input.disabled = false;
  hr.hidden = true;
  days_text.hidden = true;
  hrs_text.hidden = true;
  minutes_text.hidden = true;
  btn_clear.hidden = true;
}
