const getUserNames = users => {
    const userNames = users.map(user => user.name);
    return userNames;
};

//Напиши функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей(свойство name) из массива объектов в параметре users.