let balance = 10000;
const payment = 2000;
alert(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);
const message1 = balance - payment;
payment <= balance
  ? alert(`На счету осталось ${message1} кредитов`)
  : alert('На счету недостаточно средств для проведения операции!');
alert("Все хорошо, снимаем деньги... Спасибо за покупку!");
alert('Операция завершена');

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */