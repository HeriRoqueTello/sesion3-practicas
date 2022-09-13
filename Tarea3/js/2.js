//* Declarar las variables de los inputs
const student = document.getElementById('student');
const grade1 = document.getElementById('grade1');
const grade2 = document.getElementById('grade2');
const hr = document.querySelector('hr');
const student_text = document.getElementById('student-text');
const average_text = document.getElementById('average-text');
const btn_average = document.getElementById('average');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular el promedio y mostrarlo al usuario
function setAverage() {
  var number1 = grade1.value;
  var number2 = grade2.value;
  var average = (parseInt(number1) + parseInt(number2)) / 2;
  //console.log(number1, number2, average);
  student_text.textContent = 'Alumno: ' + student.value;
  average_text.textContent = 'Promedio: ' + average;
  btn_average.hidden = true;
  student.disabled = true;
  grade1.disabled = true;
  grade2.disabled = true;
  hr.hidden = false;
  student_text.hidden = false;
  average_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  student.value = '';
  grade1.value = '';
  grade2.value = '';
  btn_average.hidden = false;
  student.disabled = false;
  grade1.disabled = false;
  grade2.disabled = false;
  hr.hidden = true;
  student_text.hidden = true;
  average_text.hidden = true;
  btn_clear.hidden = true;
}
