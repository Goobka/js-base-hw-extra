const sortByAscendingBalance = (users) => {
  const newArr = [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance
  );
  return newArr;
};
//Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).