// Первая кнопка — интерактив
const magicButton = document.getElementById('magicButton');
if (magicButton) {
  magicButton.addEventListener('click', () => {
    alert('✨ Магия JavaScript работает!');
  });
}

// Вторая кнопка — приветствие
const mainButton = document.getElementById('mainButton');
if (mainButton) {
  mainButton.addEventListener('click', () => {
    alert('👋 Привет! Рад, что ты здесь!');
  });
}
