(() => {
  const GRID = document.getElementById('pp6-grid');
  const COUNT = document.getElementById('pp6-count');
  const RESET = document.getElementById('pp6-reset');

  const N = 6;
  const TOTAL = N * N;
  const KEY = 'pp6_local_state_v1'; // localStorage ключ

  /** Загружаем состояние (массив boolean длиной 36) */
  const load = () => {
    try {
      const raw = localStorage.getItem(KEY);
      const arr = raw ? JSON.parse(raw) : null;
      if (Array.isArray(arr) && arr.length === TOTAL) return arr.map(Boolean);
    } catch {}
    return Array(TOTAL).fill(false);
  };

  /** Сохраняем */
  const save = (state) => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  };

  let state = load();

  /** Рендерим сетку */
  const render = () => {
    GRID.replaceChildren();
    state.forEach((on, i) => {
      const b = document.createElement('button');
      b.className = 'pp6-dot' + (on ? ' on' : '');
      b.type = 'button';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.title = on ? 'Лопнул!' : 'Пузырёк';
      b.addEventListener('click', () => toggle(i, b));
      GRID.appendChild(b);
    });
    COUNT.textContent = state.filter(Boolean).length;
  };

  const toggle = (i, el) => {
    state[i] = !state[i];
    el.classList.toggle('on', state[i]);
    el.setAttribute('aria-pressed', state[i] ? 'true' : 'false');
    COUNT.textContent = state.filter(Boolean).length;
    save(state);
    // Лёгкая вибрация
    if (navigator.vibrate) navigator.vibrate(10);
  };

  RESET.addEventListener('click', () => {
    state = Array(TOTAL).fill(false);
    save(state);
    render();
  });

  render();
})();
