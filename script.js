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

// === Кнопка "Магия" ===
const magicButton = document.getElementById('magicButton');
if (magicButton) {
  magicButton.addEventListener('click', () => {
    const msg = document.createElement('p');
    msg.textContent = '✨ Магия работает! ✨';
    msg.style.marginTop = '1rem';
    magicButton.insertAdjacentElement('afterend', msg);
  });
}

// === Кнопка "Привет" ===
const mainButton = document.getElementById('mainButton');
if (mainButton) {
  mainButton.addEventListener('click', () => {
    const msg = document.createElement('p');
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
      confirmation.textContent = `Спасибо, ${nameValue}! Вы записались на "${serviceValue}". Мы свяжемся с вами по номеру ${phoneValue}.`;
      confirmation.style.marginTop = '1rem';
      confirmation.style.padding = '1rem';
      confirmation.style.backgroundColor = '#e6f7ff';
      confirmation.style.border = '1px solid #91d5ff';
      confirmation.style.borderRadius = '8px';

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
