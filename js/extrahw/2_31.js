function findNumber(start, end, divisor) {
  let numbers;
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      numbers = i;
      break;
    }
  }
  return numbers;
}


// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.