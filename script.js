// Первая кнопка: magicButton
document.getElementById("magicButton").addEventListener("click", function () {
  let existing = document.getElementById("magicMessage");

  if (existing) {
    existing.remove(); // Удалим, если сообщение уже есть
  } else {
    let msg = document.createElement("p");
    msg.id = "magicMessage";
    msg.textContent = "✨ Магия сработала! ✨";
    msg.style.marginTop = "1rem";
    msg.style.fontWeight = "bold";
    msg.style.color = "#3498db";
    this.parentElement.appendChild(msg);
  }
});

// Вторая кнопка: mainButton
document.getElementById("mainButton").addEventListener("click", function () {
  let existing = document.getElementById("greetingMessage");

  if (existing) {
    existing.remove();
  } else {
    let msg = document.createElement("p");
    msg.id = "greetingMessage";
    msg.textContent = "Спасибо, что нажал! Ты молодец 💪";
    msg.style.marginTop = "1rem";
    msg.style.fontWeight = "bold";
    msg.style.color = "#2ecc71";
    document.getElementById("about").appendChild(msg);
  }
});
