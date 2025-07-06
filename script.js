// Бургер
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if(burger && nav){
  burger.addEventListener('click', ()=>nav.classList.toggle('show'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>nav.classList.remove('show')));
}

// Интерактивные кнопки
const magicButton = document.getElementById('magicButton');
if(magicButton){
  magicButton.addEventListener('click', ()=>{
    const existing = document.getElementById('magicMessage');
    if(existing) existing.remove();
    else magicButton.insertAdjacentHTML('afterend','<p id="magicMessage">✨ Магия сработала!</p>');
  });
}

const mainButton = document.getElementById('mainButton');
if(mainButton){
  mainButton.addEventListener('click', ()=>{
    const existing = document.getElementById('greetingMessage');
    if(existing) existing.remove();
    else mainButton.insertAdjacentHTML('afterend','<p id="greetingMessage">Спасибо, что нажал! 💪</p>');
  });
}

// Анимация появления при прокрутке
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.2});
faders.forEach(el=>observer.observe(el));

// Карточки
const cards = document.querySelectorAll('.project-card');
cards.forEach(card=>observer.observe(card));

// Блог
document.querySelectorAll('.blog-entry').forEach(entry=>{
  entry.addEventListener('click', ()=>entry.classList.toggle('active'));
});
