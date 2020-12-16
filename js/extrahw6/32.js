const calculateTotalBalance = (users) => {
  return users.reduce((acc, element) => {
    return acc + element.balance;
  }, 0);
};

//Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.