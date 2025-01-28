// 1. Вводимо необхідні дані

const price = parseFloat(prompt('Введіть ціну товару:'));
const quantity = parseInt(prompt('Введіть необхідну кількість товару:'));

// 2. Знаходимо результат

const generalPrice = price * quantity;
const tax = 0.05;
const priceWithTax = generalPrice * tax;

// 3. Виводимо результат

document.write(`
Загальна вартість товару ${generalPrice} та ПДВ ${priceWithTax.toFixed(2)} (5% від загальної вартості).
`);