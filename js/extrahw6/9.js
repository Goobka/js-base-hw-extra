/*function changeEven(numbers, value) {
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 === 0) {
            numbers[i] = numbers[i] + value;
        }
    }
}*/

function changeEven(numbers, value) {
    const newArr = [];
    numbers.forEach(element => {
        if (element % 2 === 0) {
            element = element + value;
        }
        newArr.push(element);
    })
    return newArr;
}
/*Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.*/