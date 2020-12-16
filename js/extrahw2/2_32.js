function includes(array, value) {
    for (const item of array) {
        console.log(item);
        if (value === item) {
            return true;
        }
    }
    return false;
}


console.log(includes([1, 2, 3, 4, 5], 3));

//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение //value, возвращая true если есть и false в противном случае.