const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive);
};
//Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.