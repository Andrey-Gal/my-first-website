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

// Сразу запускаем анимацию при загрузке страницы
window.dispatchEvent(new Event('scroll'));


// Кнопка "Магия"
const magicButton = document.getElementById('magicButton');
if (magicButton) {
  magicButton.addEventListener('click', () => {
    const magicMsg = document.createElement('p');
    magicMsg.textContent = '✨ Магия работает! ✨';
    magicMsg.style.marginTop = '1rem';
    magicButton.insertAdjacentElement('afterend', magicMsg);
  });
}

// Вторая кнопка — "Привет!"
const mainButton = document.getElementById('mainButton');
if (mainButton) {
  mainButton.addEventListener('click', () => {
    const msg = document.createElement('p');
    msg.textContent = '👋 Привет из JS!';
    msg.style.marginTop = '1rem';
    mainButton.insertAdjacentElement('afterend', msg);
  });
}


// Мини-блог
document.querySelectorAll('.blog-entry').forEach(entry => {
  entry.addEventListener('click', () => {
    entry.classList.toggle('active');
  });
});

// Бургер-меню
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

// Темная тема
const themeToggle = document.createElement('div');
themeToggle.innerHTML = '🌙';
themeToggle.title = 'Переключить тему';
themeToggle.style.cursor = 'pointer';
themeToggle.style.fontSize = '1.5rem';
themeToggle.style.marginRight = '1rem';

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.querySelector('header')?.prepend(themeToggle);

// Модальное окно (исправленный код)
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalDesc = document.getElementById("modal-description");
const closeModal = document.querySelector(".modal-close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", (e) => {
    // Если клик по ссылке внутри карточки, модальное окно не открываем
    if (e.target.tagName === 'A') return;

    const link = card.querySelector('a');
    // Проверяем, есть ли у ссылки класс no-modal, если есть — модальное не открывать
    if (link && link.classList.contains('no-modal')) return;

    const img = card.querySelector("img");
    const desc = card.querySelector("p");

    modalImage.src = img.src;
    modalDesc.textContent = desc.textContent;
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
