const countTotalSalary = function (employees) {
    'use strict';
    // Write code under this line
    let result = 0;
    const values = Object.values(employees);
    for (const value of values) {
        result += value;
    };
    return result;
};

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".