// 1. Вводимо необхідні дані

const season = parseInt(prompt('Введіть номер місяця'));

// 2. Знаходимо результат

switch (season) {
    case 12: 
    case 1: 
    case 2:  
        result = "Пора року - зима";
        break;
    case 3:  
    case 4:  
    case 5:  
        result = "Пора року - весна";
        break;

    case 6: 
    case 7:  
    case 8:  
        result = "Пора року - літо";
        break;
    case 9: 
    case 10:  
    case 11:
        result = "Пора року - осінь";
        break;

  default:
        result = "Невірно введено номер місяця";
}

document.write(result);

