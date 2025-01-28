// 1. Вводимо необхідні дані

const seconds = parseInt(prompt('Введіть кількість секунд, що пройшла від початку доби:'));
const oneMinuteInSeconds = 60;
const oneHourInSeconds = 3600;

// 2. Знаходимо результат

const secondsToHours = seconds / oneHourInSeconds;
const secondsToMinutes = seconds / oneMinuteInSeconds;

// 3. Виводимо результат

document.write(`
${seconds} секунд = ${secondsToHours.toFixed(3)} годин. <br>
${seconds} секунд = ${secondsToMinutes.toFixed(3)} хвилин.
`);