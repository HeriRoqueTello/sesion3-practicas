//* Declarar las variables de los inputs
const product = document.getElementById('product');
const price = document.getElementById('price');
const hr = document.querySelector('hr');
const product_text = document.getElementById('product-text');
const price_text = document.getElementById('price-text');
const igv_text = document.getElementById('igv-text');
const totalprice_text = document.getElementById('totalprice-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular el igv y mostrarlo al usuario
function setIgv() {
  var igv = parseFloat(price.value) * 0.18;
  var total = parseFloat(price.value) + igv;
  console.log(price.value, igv, total);
  product_text.textContent = 'Producto: ' + product.value;
  price_text.textContent = 'Precio: S/' + price.value;
  igv_text.textContent = 'IGV: S/' + igv.toFixed(2);
  totalprice_text.textContent = 'Precio Total: S/' + total.toFixed(2);
  btn_total.hidden = true;
  product.disabled = true;
  price.disabled = true;
  hr.hidden = false;
  product_text.hidden = false;
  price_text.hidden = false;
  igv_text.hidden = false;
  totalprice_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  product.value = '';
  price.value = '';
  btn_total.hidden = false;
  product.disabled = false;
  price.disabled = false;
  hr.hidden = true;
  product_text.hidden = true;
  price_text.hidden = true;
  igv_text.hidden = true;
  totalprice_text.hidden = true;
  btn_clear.hidden = true;
}
