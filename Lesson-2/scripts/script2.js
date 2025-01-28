// 1. Вводимо необхідні дані

const birthDay = parseInt(prompt('Введіть рік народження:'));
const currentYear = 2025;

// 2. Знаходимо результат

const numberOfYears = currentYear - birthDay;

// 3. Виводимо результат

document.write(`
Ваш вік - ${numberOfYears}.
`);