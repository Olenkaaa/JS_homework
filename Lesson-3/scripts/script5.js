// 1. Вводимо необхідні дані

const category = prompt('Введіть категорію водія (А, В, С):');

// 2. Знаходимо результат

switch (category) {
    case 'A':  
        result = "А-мотоцикл";
        break;

    case 'B':  
        result = "В-легковий автомобіль";
        break;

    case 'C':  
        result = "С-вантажний автомобіль";
        break;
    
    default:
        result = "Невірно введено категорію";
}

document.write(result);


