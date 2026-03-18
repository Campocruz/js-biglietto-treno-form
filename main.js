// Select Element DOM
const nameEl = document.getElementById('inputName');
const kmEl = document.getElementById('inputKm');
const ageEl = document.getElementById('inputAge');
const formEl = document.querySelector('form');
const containerCardEl = document.getElementById('container-card');

// Constant
const costKm = 0.21;
const discount_minors = 0.2;
const discount_over = 0.4;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameEl.value;
  const km = kmEl.value;
  const age = ageEl.value;
  const price = calcKm(age, km);
  const ticketCard = document.createElement('div');
  ticketCard.classList.add('card');
  ticketCard.innerHTML = 'test';
  containerCardEl.appendChild(ticketCard);
  console.log(price);
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
  return price.toFixed(2)
}