//* Declarar las variables de los inputs
const employee = document.getElementById('employee');
const hours = document.getElementById('hours');
const rate = document.getElementById('rate');
const hr = document.querySelector('hr');
const employee_text = document.getElementById('employee-text');
const salary_text = document.getElementById('salary-text');
const btn_salary = document.getElementById('salary');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular el salario y mostrarlo al usuario
function setSalary() {
  var salary = parseInt(hours.value) * parseFloat(rate.value);
  console.log(hours.value, rate.value, salary);
  employee_text.textContent = 'Empleado: ' + employee.value;
  salary_text.textContent = 'Salario: S/' + salary;
  btn_salary.hidden = true;
  employee.disabled = true;
  hours.disabled = true;
  rate.disabled = true;
  hr.hidden = false;
  employee_text.hidden = false;
  salary_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  employee.value = '';
  hours.value = '';
  rate.value = '';
  btn_salary.hidden = false;
  employee.disabled = false;
  hours.disabled = false;
  rate.disabled = false;
  hr.hidden = true;
  employee_text.hidden = true;
  salary_text.hidden = true;
  btn_clear.hidden = true;
}
