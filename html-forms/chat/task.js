const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.querySelector('.chat-widget__input');
let userMessage;
let time = new Date();
time = `${time.getHours()}:${time.getMinutes()}`;

const botMessages = [
    'я отвечу на Ваш вопрос завтра',
    'Здравствуйте! До свидания!',
    'Мы ничего не будем вам продавать!',
    'К сожалению, все операторы заняты. Не пишите нам больше!',
    'Будешь проходить мимо — проходи.',
    'Оставьте телефон для связи, и мы Вам обязательно не перезвоним'
]
const num = () => {
    return Math.floor(Math.random() * botMessages.length);
}
const showMessage = function (time, message, classUser) {
    chatWidgetMessages.innerHTML += `
        <div class="message ${classUser}">
            <div class="message__time">${time}</div>
            <div class="message__text">${message}</div>
        </div>
    `;
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

chatWidgetInput.addEventListener('input', () => {
    userMessage = chatWidgetInput.value;
});

chatWidgetInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter' && chatWidgetInput.value !== '') {
        showMessage(time, chatWidgetInput.value, 'message_client');
        chatWidgetInput.value = '';
        setTimeout(() => {
            showMessage(time, botMessages[num()], '');
        }, 500);
    }
});