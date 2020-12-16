/*function getCommonElements(firstArray, secondArray) {
    const commonElements = [];

    firstArray.forEach(function (element) {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });
    return commonElements;
}*/



const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });
    return commonElements;
}

//Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.