// Получаем элементы
const envelope = document.getElementById('envelope');
const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');
const replyMsg = document.getElementById('replyMsg');

// 1. Открытие письма
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

// 2. Кнопка "Да"
acceptBtn.addEventListener('click', () => {
  replyMsg.textContent = 'Я так и знал выбирай время красотка';
  // TODO 6: Добавь сюда конфетти, смену фона или плавное исчезновение кнопок
});

// 3. Кнопка "Нет" (убегает мгновенно и далеко)
declineBtn.addEventListener('mouseenter', () => {
  // Увеличиваем дистанцию: от -150 до +150 px по горизонтали и вертикали
  const x = (Math.random() - 0.5) * 300;
  const y = (Math.random() - 0.5) * 200;

  // Убираем плавность, чтобы кнопка "телепортировалась" мгновенно
  declineBtn.style.transition = 'none';
  declineBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// TODO 7: Попробуй добавить:
// - плавное появление звёзд на фоне через CSS @keyframes
// - эффект печатающегося текста в <p> послания
// - замену "Нет" на "Точно нет?" после 2-го наведения