// === Урок 1: базовые функции ===

// 1. isEven(n) — true, если n чётное
function isEven(n) {
  return n % 2 === 0;
}

// 2. max(a, b) — большее из двух чисел
function max(a, b) {
  return a > b ? a : b;
}

// 3. greet(name) — выводит приветствие
function greet(name) {
  console.log(`👋 Привет, ${name}!`);
}

/* --- Тесты --- */
console.log('isEven(4) →', isEven(4));   // true
console.log('max(10, 7) →', max(10, 7)); // 10
greet('Андрей');                         // 👋 Привет, Андрей!
