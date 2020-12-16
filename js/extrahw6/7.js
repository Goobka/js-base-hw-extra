/*function filterArray(numbers, value) {
    const filteredNumbers = [];

    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
}*/
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
}


//Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.