/* NYAMPE interactions. Route examples are illustrative, not live data. */
const form = document.querySelector('#route-search');
const originInput = document.querySelector('#origin');
const destinationInput = document.querySelector('#destination');
const formMessage = document.querySelector('#form-message');
const resultsSection = document.querySelector('#results');
const resultsRoute = document.querySelector('#results-route');
const routeOptions = document.querySelector('#route-options');

const simulatedRoutes = [
  { title: 'Pilihan hemat', cost: 'Rp8.000', time: '± 45 menit', stages: '2 tahap perjalanan', transport: 'Jalan kaki → Angkutan kota → Jalan kaki', reason: 'Contoh rute dengan fokus pada estimasi biaya yang lebih rendah.' },
  { title: 'Pilihan seimbang', cost: 'Rp12.000', time: '± 35 menit', stages: '2 tahap perjalanan', transport: 'Jalan kaki → Transportasi umum → Jalan kaki', reason: 'Contoh kombinasi perjalanan dengan keseimbangan biaya dan waktu.' },
  { title: 'Pilihan praktis', cost: 'Rp20.000', time: '± 25 menit', stages: '1 tahap perjalanan', transport: 'Kendaraan langsung → Jalan kaki', reason: 'Contoh opsi dengan tahapan lebih sedikit.' }
];
const clearMessage = () => { formMessage.textContent = ''; };

document.querySelector('#swap-locations').addEventListener('click', () => {
  const oldOrigin = originInput.value;
  originInput.value = destinationInput.value;
  destinationInput.value = oldOrigin;
  clearMessage();
});

document.querySelectorAll('.place-card').forEach((card) => {
  card.addEventListener('click', () => {
    const place = card.dataset.place;
    if (!originInput.value.trim()) {
      originInput.value = place;
      formMessage.textContent = `${place} dipilih sebagai lokasi awal.`;
    } else {
      destinationInput.value = place;
      formMessage.textContent = `${place} dipilih sebagai tujuan.`;
    }
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

document.querySelector('#see-all').addEventListener('click', (event) => {
  event.preventDefault();
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  originInput.focus({ preventScroll: true });
});

function renderRoutes(origin, destination) {
  resultsRoute.textContent = `${origin} → ${destination}`;
  routeOptions.replaceChildren();
  simulatedRoutes.forEach((route) => {
    const card = document.createElement('article');
    card.className = 'route-option';
    const title = document.createElement('h3'); title.textContent = route.title;
    const metrics = document.createElement('div'); metrics.className = 'route-metrics';
    [route.cost, route.time, route.stages].forEach((value) => {
      const item = document.createElement('span'); item.textContent = value; metrics.appendChild(item);
    });
    const transport = document.createElement('p'); transport.textContent = route.transport;
    const reason = document.createElement('p'); reason.textContent = route.reason;
    card.append(title, metrics, transport, reason); routeOptions.appendChild(card);
  });
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const origin = originInput.value.trim();
  const destination = destinationInput.value.trim();
  if (!origin || !destination) { formMessage.textContent = 'Isi lokasi awal dan tujuanmu dulu, ya.'; return; }
  if (origin.toLocaleLowerCase('id') === destination.toLocaleLowerCase('id')) {
    formMessage.textContent = 'Lokasi awal dan tujuan masih sama. Coba pilih lokasi yang berbeda.'; return;
  }
  clearMessage();
  renderRoutes(origin, destination);
});
[originInput, destinationInput].forEach((input) => input.addEventListener('input', clearMessage));
