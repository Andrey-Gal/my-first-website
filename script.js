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

// === Кнопки на главной странице ===
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

// === Анимация карточек при скролле ===
const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// === Активация мини-блога ===
document.querySelectorAll('.blog-entry').forEach(entry => {
  entry.addEventListener('click', () => {
    entry.classList.toggle('active');
  });
});
