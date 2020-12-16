const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 === 1);

const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 === 1);

const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 === 1);


/*Используя метод every() дополни код так, чтобы:

В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.*/