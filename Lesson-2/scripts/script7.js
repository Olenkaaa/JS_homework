// 1. Вводимо необхідні дані

const firstMonth = 1;
const lastMonth = 12;

const firstDay = 0;
const lastDay = 6;


// 2. Знаходимо результат
const randomOfMonth = firstMonth + Math.floor(Math.random()*(lastMonth-firstMonth+1));
const randomOfDay = firstDay + Math.floor(Math.random()*(lastDay-firstDay+1));
const sum = randomOfMonth + randomOfDay;

// 3. Виводимо результат

document.write(`
Випадковий номер місяця ${randomOfMonth} + випадковий номер дня ${randomOfDay} =  ${sum}.
`);