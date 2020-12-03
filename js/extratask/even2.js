const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        total += numbers[i];
        console.log(total);
   }
}