const getSortedFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort();
};

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .