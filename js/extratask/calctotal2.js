/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */
 const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
 
const calculateTotalPrice = function (items) {
    let total = 0;
    for (item of items) {
        total += item;
    }
    return total;
}

console.log(calculateTotalPrice(cart));