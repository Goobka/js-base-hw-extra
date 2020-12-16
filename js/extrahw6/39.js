const sortByDescendingFriendCount = (users) => {
  const newArr = [...users].sort((a, b) => b.friends.length - a.friends.length);
  return newArr;
};

//Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).