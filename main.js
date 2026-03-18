// Select Element DOM
const nameEl = document.getElementById('inputName');
const kmEl = document.getElementById('inputKm');
const ageEl = document.getElementById('inputAge');
const formEl = document.querySelector('form');

// Constant
const costKm = 0.21;
const discount_minors = 0.2;
const discount_over = 0.4;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameEl.value;
  const km = kmEl.value;
  const age = ageEl.value;
  calcKm(age, km);
})


// Funzioni
function calcKm(age, km) {

  if (age === 'Minorenne') {
    price = (costKm * km) - ((costKm * km) * discount_minors)
  } else if (age === 'Over 65') {
    price = (costKm * km) - ((costKm * km) * discount_over)
  } else {
    price = (costKm * km)
  }
  console.log(price.toFixed(2) + '€');
}