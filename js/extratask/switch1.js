/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

  const stars = 1;
  let price;
switch (stars) {
    case 1:
        price = "20$";
        break;
    case 2:
        price = '30$';
        break;
    case 3:
        price = '50$';
        break;
    case 4:
        price = '70$';
        break;
    case 5:
        price = '120$';
        break;
    default:
        console.log('Такого кол-ва звезд нет');
}
console.log(price);
