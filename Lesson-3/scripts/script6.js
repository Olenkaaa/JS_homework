// 1. Вводимо необхідні дані

const category = parseInt(prompt('Введіть номер дня тижня'));

// 2. Знаходимо результат

switch (category) {
  case 1:  
      result="Понеділок";
      break;

  case 2:  
       result="Вівторок";
      break;

  case 3:  
      result="Середа";
      break;

  case 4:  
      result="Четвер";
      break;
  
  case 5:  
      result="П\'ятниця";
      break;

  case 6:  
      result="Субота";
      break;

  case 7:  
      result="Неділя";
      break;

  default:
      result="Невірно введено номер дня тижня";
}

document.write(result);

