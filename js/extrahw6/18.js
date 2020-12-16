const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};

// Напиши функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.