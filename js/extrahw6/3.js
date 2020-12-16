function getCommonElements(firstArray, secondArray) {
    const commonElements = [];

    /*for (let i = 0; i < firstArray.length; i += 1) {
        if (secondArray.includes(firstArray[i])) {
            commonElements.push(firstArray[i]);
        }
    }*/
    firstArray.forEach(item => {
        if (secondArray.includes(item)) {
            commonElements.push(item);
        }
    })
    return commonElements;
}

//Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и 
//возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.