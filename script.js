// === 1. Анимации при скролле (элементы появляются плавно) ===
const fadeIns = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeIns.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// === 2. Кнопка "Магия работает!" (на главной странице) ===
const magicButton = document.getElementById('magicButton');
if (magicButton) {
  magicButton.addEventListener('click', () => {
    alert('✨ Магия работает! ✨');
  });
}

// === 3. Мини-блог: разворачивает/сворачивает контент при клике ===
document.querySelectorAll('.blog-entry').forEach(entry => {
  entry.addEventListener('click', () => {
    entry.classList.toggle('active');
  });
});

// === 4. Бургер-меню для мобильных устройств ===
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Закрываем меню при переходе по ссылке
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
}

// === 5. Переключатель темы (светлая / тёмная) ===
const themeToggle = document.createElement('div');
themeToggle.innerHTML = '🌙';
themeToggle.title = 'Переключить тему';
themeToggle.style.cursor = 'pointer';
themeToggle.style.fontSize = '1.5rem';
themeToggle.style.marginRight = '1rem';
themeToggle.style.userSelect = 'none';

// Обработчик события по клику на иконку
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Добавляем иконку переключения темы в шапку
document.querySelector('header')?.prepend(themeToggle);
