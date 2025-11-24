// бургер-меню
const burger = document.getElementById('burger');
const nav = document.getElementById('main-nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// отправка формы дежурному номеру (через WhatsApp)
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

// дежурний номер у міжнародному форматі без +
const DUTY_PHONE = "380688297615"; // змінюй при потребі

if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const contacts = formData.get('contacts') || '';
    const message = formData.get('message') || '';

    const text =
      `Нова заявка з сайту БудТехнікаКран:%0A` +
      `Ім’я: ${name}%0A` +
      `Контакти: ${contacts}%0A` +
      `Повідомлення: ${message}`;

    const waUrl = `https://wa.me/${DUTY_PHONE}?text=${text}`;

    // відкриваємо WhatsApp з готовим текстом
    window.open(waUrl, '_blank');

    statusEl.textContent = "Заявка сформована. Перевірте WhatsApp на черговому номері.";
    form.reset();
  });
}
