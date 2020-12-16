const getTotalFriendCount = (users) => {
  return users.reduce((acc, user) => {
    return acc + user.friends.length;
  }, 0);
};

//Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.