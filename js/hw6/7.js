const calculateTotalBalance = array =>
  array.reduce((value, { balance }) => value + balance, 0);


  //Получи общую сумму баланса (сумму //значений свойства balance) всех //пользователей.

//Используй деструктурирующее присваивание //для параметра функции {balance} без //пробелов и переносов на новую строку

//Используй только перебирающие методы //массива которые не изменяют (не //мутируют) исходный массив. Т.е. нельзя //использовать for, splice, push и т.п. //мутирующие методы.