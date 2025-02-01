// 1. Вводимо необхідні дані

const agePerson = parseInt(prompt('Скільки Вам років?' , "27"));

const maxChildAge = 3;
const minSchooldAge = 6;
const maxSchooldAge = 17;
const maxStudentdAge = 22;
const maxWorkerAge = 65;
const retiredAge = 100;
// 2. Знаходимо результат

if (agePerson >= 0 && agePerson < maxChildAge) {
    document.write(`${agePerson} років - Немовля`);
} else if (agePerson >= maxChildAge && agePerson < minSchooldAge) {
    document.write(`${agePerson} років - Дитина у садочку`);
}
else if (agePerson >= minSchooldAge && agePerson < maxSchooldAge){
    document.write(`${agePerson} років - Школяр`);
}
else if (agePerson >= maxSchooldAge && agePerson < maxStudentdAge) {
    document.write(`${agePerson} років - Студент`);
}

else if (agePerson >= maxStudentdAge && agePerson < maxWorkerAge) {
    document.write(`${agePerson} років - Працівник`);
}
else if (agePerson >= maxWorkerAge && agePerson < retiredAge) {
    document.write(`${agePerson} років - Пенсіонер`);
}
else {
    document.write(`${agePerson} років - ви впевнені що правильно ввели ваш вік?`);
}

