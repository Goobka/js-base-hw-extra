function filterArray(numbers, value) {
    const filteredNumbers = [];

    //for (let i = 0; i < numbers.length; i += 1) {
    //    if (numbers[i] > value) {
    //       filteredNumbers.push(numbers[i]);
    //    }
    //}
    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        };
    })
    return filteredNumbers;
}

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.