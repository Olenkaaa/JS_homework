// 1. Вводимо необхідні дані

const nameChild1 = prompt('Введіть ім\'я першої дитини:');
const numberCandy1Child = parseInt(prompt('Введіть кількість цукерок першої дитини:'));
const nameChild2 = prompt('Введіть ім\'я другої дитини:');
const numberCandy2Child = parseInt(prompt('Введіть кількість цукерок другої дитини:'));
const coolerChild = numberCandy1Child > numberCandy2Child ?  nameChild1 : nameChild2; 

// 2. Знаходимо і виводимо результат


if (numberCandy1Child > numberCandy2Child || numberCandy1Child < numberCandy2Child) {
    document.write(`В дитини з іменем ${coolerChild} кількість цукерок більша. <br>
        ${nameChild1} має ${numberCandy1Child} цукерок, в той час як ${nameChild2} має ${numberCandy2Child} цукерок.`);
} else {
    document.write(`В дітей ${nameChild1} та ${nameChild2} однакова кількість цукерок.<br>
        ${nameChild1} має ${numberCandy1Child} цукерок,  ${nameChild2} має ${numberCandy2Child} цукерок.`);
}


