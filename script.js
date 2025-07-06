// === Бургер-меню ===
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
}

// === Кнопки на главной ===
const magicButton = document.getElementById('magicButton');
if (magicButton) {
  magicButton.addEventListener('click', () => {
    let msg = document.getElementById('magicMessage');
    if (msg) {
      msg.remove();
    } else {
      magicButton.insertAdjacentHTML('afterend', '<p id="magicMessage">✨ Магия сработала!</p>');
    }
  });
}

const mainButton = document.getElementById('mainButton');
if (mainButton) {
  mainButton.addEventListener('click', () => {
    let msg = document.getElementById('greetingMessage');
    if (msg) {
      msg.remove();
    } else {
      mainButton.insertAdjacentHTML('afterend', '<p id="greetingMessage">Спасибо, что нажал! 💪</p>');
    }
  });
}

// wave-effect.js
function createWave(e) {
  const btn = e.currentTarget;
  const wave = document.createElement('span');
  const d = Math.max(btn.offsetWidth, btn.offsetHeight);
  wave.style.width = wave.style.height = d + 'px';
  wave.style.left = `${e.clientX - btn.getBoundingClientRect().left - d/2}px`;
  wave.style.top = `${e.clientY - btn.getBoundingClientRect().top - d/2}px`;
  wave.classList.add('wave');
  btn.appendChild(wave);
  setTimeout(() => wave.remove(), 600);
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', createWave);
});

// images-fade.js
const imgs = document.querySelectorAll('img');
const imgObserver = new IntersectionObserver(entries => {
  entries.forEach(ent => {
    if (ent.isIntersecting) {
      ent.target.classList.add('visible');
      imgObserver.unobserve(ent.target);
    }
  });
}, { threshold: 0.2 });

imgs.forEach(img => imgObserver.observe(img));

const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
