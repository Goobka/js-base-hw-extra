
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};
console.log(getActiveUsers(users))

//напиши функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.