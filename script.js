// Анимации при скролле
const fadeIns = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeIns.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Кнопка "магия"
document.getElementById('magicButton')?.addEventListener('click', () => {
  alert('✨ Магия работает! ✨');
});

// Мини-блог раскрытие
document.querySelectorAll('.blog-entry').forEach(entry => {
  entry.addEventListener('click', () => {
    entry.classList.toggle('active');
  });
});

// Бургер-меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger?.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Темная тема
const themeToggle = document.createElement('div');
themeToggle.innerHTML = '🌙';
themeToggle.style.cursor = 'pointer';
themeToggle.style.fontSize = '1.5rem';
themeToggle.style.marginRight = '1rem';
themeToggle.title = 'Переключить тему';

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.querySelector('header')?.prepend(themeToggle);
