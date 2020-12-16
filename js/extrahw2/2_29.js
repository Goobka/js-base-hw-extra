function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    let numbers = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            numbers.push(i);
            
        };   
    }
    return numbers;
}

console.log(getEvenNumbers(5, 10));

//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.