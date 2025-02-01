// 1. Вводимо необхідні дані

const minRandomNumber = 1;
const maxRandomNumber = 5;
const randomNumber = minRandomNumber + Math.floor(Math.random()*(maxRandomNumber-minRandomNumber+1));
const numberAttempt1 = parseInt(prompt('Ваша перша спроба вгадати число:'));
const numberAttempt2 = parseInt(prompt('Ваша друга спроба вгадати число:'));


// 2. Знаходимо і виводимо результат


if (randomNumber===numberAttempt1 || randomNumber===numberAttempt2) 
    document.write(`Згенероване число = ${randomNumber}. <br> Ви вгадали згенероване число. Ваше перше введене число - ${numberAttempt1} і друге - ${numberAttempt2}.`);
else
    document.write(`Ви не вгадали жодне із згенерованих чисел.<br>
 Згенероване число = ${randomNumber}. Ваше перше введене число - ${numberAttempt1} і друге - ${numberAttempt2}.`);


