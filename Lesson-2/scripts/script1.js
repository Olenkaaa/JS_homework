// 1. Вводимо необхідні дані

const number1 = parseFloat(prompt('Введіть перше дійсне число:'));
const number2 = parseFloat(prompt('Введіть друге дійсне число:'));

// 2. Знаходимо результат

const sum = number1 + number2;

const multiplication = number1 * number2;
const division = number1 / number2;

// 3. Виводимо результат

document.write(`
    <table border = "1" style="border: 2px solid black; border-collapse: collapse;">
        <tr>
            <th>Операція</th>
            <th>Перше дійсне число: ${number1}</th>
            <th>Друге дійсне число: ${number2}</th>
        </tr>
        <tr>
            <td>Сума</td>
            <td colspan="2">${sum}</td>
        </tr>
        <tr>
            <td>Добуток</td>
            <td colspan="2">${multiplication}</td>
        </tr>
        <tr>
            <td>Частка</td>
            <td colspan="2">${division.toFixed(2)}</td>
        </tr>
    </table>
`);