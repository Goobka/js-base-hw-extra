const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 === 1);

const anyElementInSecondIsEven = secondArray.some((el) => el % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((el) => el % 2 === 1);

const anyElementInThirdIsEven = thirdArray.some((el) => el % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((el) => el % 2 === 1);

/*Используя метод some() дополни код так, чтобы:

В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.*/