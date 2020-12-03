function checkForSpam(str) {
    'use strict';
    // Write code under this line
    const message = str.toLowerCase();
    if (message.includes('spam') || message.includes('sale')) {
        return true;
    }
    return false;
}

console.log(checkForSpam('Latest technology news'));

//Функция предикат возвращает true или false

//Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.