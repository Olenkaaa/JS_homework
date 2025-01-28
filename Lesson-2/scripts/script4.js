// 1. Вводимо необхідні дані

const lengthInCentimeter = parseFloat(prompt('Введіть довжину в сантиметрах:'));


// 2. Знаходимо результат

const lengthInMeter = lengthInCentimeter / 100;
const lengthInKilometer = lengthInCentimeter / 100000;

// 3. Виводимо результат

document.write(`
${lengthInCentimeter} сантиметрів = ${lengthInMeter} метрів.
${lengthInCentimeter} сантиметрів = ${lengthInKilometer} кілометрів.
`);