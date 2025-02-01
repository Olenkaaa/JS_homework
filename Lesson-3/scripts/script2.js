// 1. Вводимо необхідні дані

const priceItem = parseFloat(prompt('Введіть ціну товару'));
const money = parseFloat(prompt('Введіть кількість грошей'));
const moneyAfterShop = money - priceItem;
const priceLottery = 4;

// 2. Знаходимо і виводимо результат

if (money < priceItem) {
    document.write(`У вас недостатньо грошей для купівлі цього товару.<br>
        Вартість товару становить ${priceItem} грн., в той час як кількість грошей на вашому рахунку становить ${money} грн.`);
} else if (moneyAfterShop >= priceLottery)  {
    document.write(`Дякуємо за покупку! <br>
        Можливо бажаєте ще придбати лотерею за 4 грн?`);
} else {
    document.write(`Дякуємо за покупку!`);
}

