//* Declarar las variables de los inputs
const student = document.getElementById('student');
const unit1_grade1 = document.getElementById('unit1-grade1');
const unit1_grade2 = document.getElementById('unit1-grade2');
const unit2_grade1 = document.getElementById('unit2-grade1');
const unit2_grade2 = document.getElementById('unit2-grade2');
const unit3_grade1 = document.getElementById('unit3-grade1');
const unit3_grade2 = document.getElementById('unit3-grade2');
const units_average = document.getElementById('units-average');
const hr = document.getElementsByClassName('separador');
const unit1_text = document.getElementById('unit1-text');
const unit2_text = document.getElementById('unit2-text');
const unit3_text = document.getElementById('unit3-text');
const student_text = document.getElementById('student-text');
const average_text = document.getElementById('units-average-text');
const btn_average = document.getElementById('average');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular el promedio y mostrarlo al usuario
function setAverage() {
  if (student.value == '') {
    alert('Tienes que llenar el formulario.');
    return false;
  } else {
    var unit1_average = (parseFloat(unit1_grade1.value) + parseFloat(unit1_grade2.value)) / 2;
    var unit2_average = (parseFloat(unit2_grade1.value) + parseFloat(unit2_grade2.value)) / 2;
    var unit3_average = (parseFloat(unit3_grade1.value) + parseFloat(unit3_grade2.value)) / 2;

    unit1_text.textContent = 'Promedio U1: ' + unit1_average.toFixed(1);
    unit2_text.textContent = 'Promedio U2: ' + unit2_average.toFixed(1);
    unit3_text.textContent = 'Promedio U3: ' + unit3_average.toFixed(1);
    var average = (unit1_average + unit2_average + unit3_average) / 3;
    console.log(unit1_average, unit2_average, unit3_average, average);
    student_text.textContent = 'Alumno: ' + student.value;
    average_text.textContent = 'Promedio Total: ' + average.toFixed(1);
    btn_average.hidden = true;
    student.disabled = true;
    unit1_grade1.disabled = true;
    unit1_grade2.disabled = true;
    unit2_grade1.disabled = true;
    unit2_grade2.disabled = true;
    unit3_grade1.disabled = true;
    unit3_grade2.disabled = true;
    hr.hidden = false;
    unit1_text.hidden = false;
    unit2_text.hidden = false;
    unit3_text.hidden = false;
    student_text.hidden = false;
    average_text.hidden = false;
    btn_clear.hidden = false;
  }
}
//* Funcion para limpiar los input del form
function clearInput() {
  student.value = '';
  unit1_grade1.value = '0';
  unit1_grade2.value = '0';
  unit2_grade1.value = '0';
  unit2_grade2.value = '0';
  unit3_grade1.value = '0';
  unit3_grade2.value = '0';
  student.disabled = false;
  btn_average.hidden = false;
  unit1_grade1.disabled = false;
  unit1_grade2.disabled = false;
  unit2_grade1.disabled = false;
  unit2_grade2.disabled = false;
  unit3_grade1.disabled = false;
  unit3_grade2.disabled = false;
  hr.hidden = true;
  unit1_text.hidden = true;
  unit2_text.hidden = true;
  unit3_text.hidden = true;
  student_text.hidden = true;
  average_text.hidden = true;
  btn_clear.hidden = true;
}
