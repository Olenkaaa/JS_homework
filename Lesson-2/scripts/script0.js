// 1. Вводимо необхідні дані

const a = parseFloat(prompt('Введіть a:'));
const b = parseFloat(prompt('Введіть b:'));
const c = parseFloat(prompt('Введіть c:'));
// 2. Знаходимо результат

const S1 = a + 12 + b;
const S2 = Math.sqrt((a + b) / (2 * a));
const S3 = Math.cbrt((a + b) * c);
const S4 = Math.sin(a / (-b));


// 3. Виводимо результат

document.write(`

    1) S1 = ${S1} <br>
    2) S2 = ${S2.toFixed(2)} <br>
    3) S3 = ${S3.toFixed(2)} <br>
    4) S4 = ${S4.toFixed(2)} <br>

`);
