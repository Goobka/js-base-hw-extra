const sortByName = (users) => {
  const usersSortByName = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return usersSortByName;
};

//Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.