// === Анимации при скролле ===
const fadeIns = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeIns.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
window.dispatchEvent(new Event('scroll'));

// === Кнопка "Магия" (один раз) ===
const magicButton = document.getElementById('magicButton');
if (magicButton) {
  magicButton.addEventListener('click', () => {
    // если абзац уже есть — ничего не создаём
    if (document.getElementById('magicMsg')) return;

    const msg = document.createElement('p');
    msg.id = 'magicMsg';                   // уникальный id
    msg.textContent = '✨ Магия работает! ✨';
    msg.style.marginTop = '1rem';
    magicButton.insertAdjacentElement('afterend', msg);
  });
}


// === Кнопка "Привет" (один раз) ===
const mainButton = document.getElementById('mainButton');
if (mainButton) {
  mainButton.addEventListener('click', () => {
    if (document.getElementById('greetMsg')) return;   // уже есть?

    const msg = document.createElement('p');
    msg.id = 'greetMsg';               // уникальный id
    msg.textContent = '👋 Привет из JS!';
    msg.style.marginTop = '1rem';
    mainButton.insertAdjacentElement('afterend', msg);
  });
}


// === Мини-блог ===
document.querySelectorAll('.blog-entry').forEach(entry => {
  entry.addEventListener('click', () => {
    entry.classList.toggle('active');
  });
});

// === Бургер-меню ===
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => nav.classList.toggle('show'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('show'));
  });
}

// === Темная тема ===
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

// === Модальное окно ===
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalDesc = document.getElementById("modal-description");
const closeModal = document.querySelector(".modal-close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') return;
    const link = card.querySelector('a');
    if (link && link.classList.contains('no-modal')) return;

    const img = card.querySelector("img");
    const desc = card.querySelector("p");

    modalImage.src = img.src;
    modalDesc.textContent = desc.textContent;
    modal.style.display = "block";
  });
});
closeModal?.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// === Маска телефона и форма записи ===
window.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phone');
  const bookingForm = document.getElementById('booking-form');

  if (phoneInput && window.Cleave) {
    new Cleave(phoneInput, {
      prefix: '+7',
      delimiters: [' (', ') ', '-', '-'],
      blocks: [2, 3, 3, 2, 2],
      numericOnly: true,
      noImmediatePrefix: true
    });
  }

  // === Обработка формы ===
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name');
      const phoneField = document.getElementById('phone');
      const service = document.getElementById('service');

      const nameValue = name?.value.trim();
      const phoneValue = phoneField?.value.trim();
      const serviceValue = service?.value;
      const digitsOnly = phoneValue.replace(/\D/g, '');

      const oldConfirmation = document.getElementById('confirmation-message');
      if (oldConfirmation) oldConfirmation.remove();

      if (!nameValue || !phoneValue || !serviceValue || digitsOnly.length !== 11) {
        name.reportValidity();
        phoneField.reportValidity();
        service.reportValidity();
        return;
      }

      const confirmation = document.createElement('p');
confirmation.id = 'confirmation-message';
confirmation.className = 'confirmation';

      confirmation.textContent = `Спасибо, ${nameValue}! Вы записались на "${serviceValue}". Мы свяжемся с вами по номеру ${phoneValue}.`;
      confirmation.classList.add('confirmation');


      bookingForm.after(confirmation);
      bookingForm.reset();
    });
  }
});

// === Пасхалка: секретная кнопка ===
const secretButton = document.createElement('button');
secretButton.id = 'secretButton';
secretButton.textContent = '✨';
document.body.appendChild(secretButton);

const secretMessage = document.createElement('div');
secretMessage.id = 'secretMessage';
secretMessage.textContent = 'Ты нашёл секрет сайта!';
document.body.appendChild(secretMessage);

secretButton.addEventListener('click', () => {
  if (secretMessage.style.display === 'none' || secretMessage.style.display === '') {
    secretMessage.style.display = 'block';
    setTimeout(() => {
      secretMessage.style.display = 'none';
    }, 3000); // скрывается через 3 секунды
  }
});

// === Цитата дня ===
const quotes = [
  "Каждый эксперт когда-то был новичком.",
  "Лучший способ научиться — начать делать.",
  "Ошибка — это ещё одна ступень к знанию.",
  "Код — это поэзия в логике.",
  "Пока другие мечтают — ты коммитишь!"
];

const quoteBox = document.createElement('div');
quoteBox.id = 'dailyQuote';
quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
document.body.appendChild(quoteBox);

(function () {
  // страницы, где нужна стрелка
  const pagesWithArrow = ['', 'index.html', 'projects.html'];
  //  ↑ добавили ''   ^               ^

  const lastPart = location.pathname.split('/').pop() || 'index.html';

  if (!pagesWithArrow.includes(lastPart)) return;

  /* --- код стрелки --- */
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  const threshold = document.body.scrollHeight / 2;  // половина контента
window.addEventListener('scroll', () => {
  btn.classList.toggle('show', window.scrollY > threshold);
});

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// === Счётчик на about.html с сохранением ===
document.addEventListener("DOMContentLoaded", () => {
  const valueEl = document.getElementById("pcValue");
  const incBtn = document.getElementById("pcInc");
  const decBtn = document.getElementById("pcDec");
  const resetBtn = document.getElementById("pcReset");
  const lastUpdate = document.getElementById("pcLast");

  if (!valueEl || !incBtn || !decBtn || !resetBtn || !lastUpdate) return;

  function animateChange(type) {
    valueEl.classList.add("flash", type);
    setTimeout(() => valueEl.classList.remove("flash", type), 400);
  }

  function updateCounter(val) {
    localStorage.setItem("persistCounter", val);
    valueEl.textContent = val;
    lastUpdate.textContent = "Последнее изменение: " + new Date().toLocaleString();
  }

  function getStoredValue() {
    return parseInt(localStorage.getItem("persistCounter")) || 0;
  }

  incBtn.addEventListener("click", () => {
    const val = getStoredValue() + 1;
    updateCounter(val);
    animateChange("up");
  });

  decBtn.addEventListener("click", () => {
    const val = getStoredValue() - 1;
    updateCounter(val);
    animateChange("down");
  });

  resetBtn.addEventListener("click", () => {
    updateCounter(0);
    animateChange("reset");
  });

  updateCounter(getStoredValue());
});
