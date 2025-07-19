(function () {
  const valueEl  = document.getElementById('pcValue');
  const incBtn   = document.getElementById('pcInc');
  const decBtn   = document.getElementById('pcDec');
  const resetBtn = document.getElementById('pcReset');
  const lastEl   = document.getElementById('pcLast');

  // Проверяем базовые элементы
  if (!valueEl || !incBtn || !resetBtn) return;

  // ---- Состояние ----
  let count = Number(localStorage.getItem('persistCount') || 0);
  valueEl.textContent = count;

  // ---- Метка времени ----
  function updateLast() {
    if (!lastEl) return;
    const now = new Date();
    lastEl.textContent = 'Последнее изменение: ' + now.toLocaleString('ru-RU');
  }

  // (если хочешь сохранять время — можно хранить и доставать, пока просто генерим заново)
  updateLast();

  // ---- Обновление + сохранение ----
  function sync() {
    valueEl.textContent = count;
    localStorage.setItem('persistCount', count);
    updateLast();
  }

  // +1
  incBtn.addEventListener('click', () => {
    count++;
    sync();
  });

  // -1 (если есть кнопка)
  if (decBtn) {
    decBtn.addEventListener('click', () => {
      if (count > 0) {
        count--;
        sync();
      }
    });
  }

  // Сброс
  resetBtn.addEventListener('click', () => {
    count = 0;
    sync();
  });
})();
