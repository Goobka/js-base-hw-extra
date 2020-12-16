const getNamesSortedByFriendCount = (users) => {
  const usersNames = [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
  return usersNames;
};

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).