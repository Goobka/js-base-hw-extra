function filterArray(array) {
    'use strict';
    const numbers = [];
    for (let i = 0; i < array.length; i += 1) {
        // Write code under this line

        // if (Number.isFinite(array[i])) {
        //     numbers.push(array[i]);
        // }
        Number.isFinite(array[i]) && numbers.push(array[i]);
    }
    return numbers;
}

    console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]
console.log(filterArray([undefined, false, null, [], 1]));

Напиши функцию filterArray(array), принимающую 1 параметр array - массив.Функция проверяет каждое значение массива - является ли значение конечным числом(Number.isFinite).Для проверки используй цикл for.Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются.По завершению прове