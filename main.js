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
  const km = Number(kmEl.value);
  const age = ageEl.value;
  const price = calcKm(age, km);
  const wagon = randomNumber(1, 10);
  const numberCp = randomNumber(9000, 10000);
  const ticketCard = document.createElement('div');
  ticketCard.classList.add('card', 'mb-3', 'ticket');
  // ticketCard.innerHTML = `NOME ${name} ETA' ${age} COSTO ${price}&euro;`;
  ticketCard.innerHTML = `
    <div class="card-body">
                <div class="row">
                  <div class="col-2">
                    <strong>Codice CP</strong>
                  </div>
                  <div class="col-2">
                    <strong>Codice CP</strong>
                  </div>
                  <div class="col-2">
                    <strong>Nome Passeggero</strong>
                  </div>
                  <div class="col-4 text-center">
                    <strong>Carrozza</strong>
                  </div>
                  <div class="col-2 text-center">
                    <strong>Costo Biglietto</strong>
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-2 text-center">
                    <p>${numberCp}</p>
                  </div>
                  <div class="col-2">
                    <p>${numberCp}</p>
                  </div>
                  <div class="col-2">
                    <p>${name}</p>
                  </div>
                  <div class="col-4 text-center">
                    <p>${wagon}</p>
                  </div>
                  <div class="col-2 text-center">
                    <p>${price}&euro;</p>
                  </div>
                </div>
              </div>
  `;
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

function randomNumber(start, end) {
  const random_number = Math.floor((Math.random() * (end - start) + start));
  return random_number;
}