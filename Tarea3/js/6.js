//* Declarar las variables de los inputs
const base_salary = document.getElementById('base-salary');
const sons = document.getElementById('sons');
const hr = document.querySelector('hr');
const base_salary_text = document.getElementById('base-salary-text');
const sons_text = document.getElementById('sons-text');
const bonus_text = document.getElementById('bonus-text');
const totalprice_text = document.getElementById('totalprice-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular el bonus y mostrarlo al usuario
function setBonus() {
  var bonus = sons.value * 80;
  var total = parseFloat(base_salary.value) + bonus;
  console.log(base_salary.value, sons.value, bonus, total);
  base_salary_text.textContent = 'Sueldo base: S/' + base_salary.value;
  sons_text.textContent = 'Hijos: ' + sons.value;
  bonus_text.textContent = 'Bonus: S/' + bonus.toFixed(2);
  totalprice_text.textContent = 'Precio Total: S/' + total.toFixed(2);
  btn_total.hidden = true;
  base_salary.disabled = true;
  sons.disabled = true;
  hr.hidden = false;
  base_salary_text.hidden = false;
  sons_text.hidden = false;
  bonus_text.hidden = false;
  totalprice_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  base_salary.value = '0';
  sons.value = '0';
  btn_total.hidden = false;
  base_salary.disabled = false;
  sons.disabled = false;
  hr.hidden = true;
  base_salary_text.hidden = true;
  sons_text.hidden = true;
  bonus_text.hidden = true;
  totalprice_text.hidden = true;
  btn_clear.hidden = true;
}
