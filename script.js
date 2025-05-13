const lightSwitch = document.getElementById('lightSwitch');
const lamp = document.querySelector('.lamp');
const lightCone = document.getElementById('lightCone');
const text = document.getElementById('loveText');
const startMessage = document.getElementById('startMessage');

let isLampOn = false;

function updateLamp() {
  isLampOn = lightSwitch.checked;
  lamp.classList.toggle('on', isLampOn);

  if (isLampOn) {
    startMessage.classList.add('hidden');
  } else {
    text.classList.remove('visible');
  }
}

// Detecta si el texto está dentro del cono de luz
function checkIfTextIsLit() {
  if (!isLampOn) return;

  const lightRect = lightCone.getBoundingClientRect();
  const textRect = text.getBoundingClientRect();

  const isLit =
    textRect.top >= lightRect.top &&
    textRect.bottom <= lightRect.bottom &&
    textRect.left >= lightRect.left &&
    textRect.right <= lightRect.right;

  if (isLit) {
    text.classList.add('visible');
  } else {
    text.classList.remove('visible');
  }
}

lightSwitch.addEventListener('change', updateLamp);

// Comprobamos continuamente si el texto está iluminado
setInterval(checkIfTextIsLit, 50);
// estrellas
const starContainer = document.getElementById('stars-container');

for (let i = 0; i < 70; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 160}s`;
  starContainer.appendChild(star);
}
// corazones 
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = `${Math.random() * 90 + 5}%`;
  heart.style.top = `${Math.random() * 20 + 60}%`; // Aparecen desde parte inferior

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

function launchHearts(amount = 10) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createHeart, i * 150); // Un corazón cada 200ms
  }
}

// Modifica updateLamp para lanzar corazones al encender
function updateLamp() {
  const isOn = lightSwitch.checked;
  lamp.classList.toggle('on', isOn);
  if (isOn) {
    startMessage.classList.add('hidden');
    launchHearts(27); // Lanza corazones
  }

  checkIfTextIsLit();
}