// 1. Вводимо необхідні дані

const itemPrice1 = parseFloat(prompt('Введіть ціну товару:'));
const itemPrice2 = parseFloat(prompt('Введіть ціну товару:'));
const itemPrice3 = parseFloat(prompt('Введіть ціну товару:'));
const itemQuantity1 = parseInt(prompt('Введіть необхідну кількість товару №1:'));
const itemQuantity2 = parseInt(prompt('Введіть необхідну кількість товару №2:'));
const itemQuantity3 = parseInt(prompt('Введіть необхідну кількість товару №3:'));

// 2. Знаходимо результат

const cost1 = itemPrice1 * itemQuantity1;
const cost2 = itemPrice2 * itemQuantity2;
const cost3 = itemPrice3 * itemQuantity3;
const generalCost = cost1 + cost2 + cost3;

// 3. Виводимо результат

document.write(`
    <div style="border: 2px solid black; padding: 10px; width: 300px;">
      <h2 style="text-align: center;">Чек</h2>
      <p>Ціна товару: <b>${itemPrice1.toFixed(2)} грн</b></p>
      <p>Ціна товару: <b>${itemPrice2.toFixed(2)} грн</b></p>
      <p>Ціна товару: <b>${itemPrice3.toFixed(2)} грн</b></p>
      <hr>
      <p>Товар №1: ${itemQuantity1} x ${itemPrice1.toFixed(2)} = <b>${cost1.toFixed(2)} грн</b></p>
      <p>Товар №2: ${itemQuantity2} x ${itemPrice2.toFixed(2)} = <b>${cost2.toFixed(2)} грн</b></p>
      <p>Товар №3: ${itemQuantity3} x ${itemPrice3.toFixed(2)} = <b>${cost3.toFixed(2)} грн</b></p>
      <hr>
      <h3>Загальна вартість: <b>${generalCost.toFixed(2)} грн</b></h3>
    </div>
  `);


