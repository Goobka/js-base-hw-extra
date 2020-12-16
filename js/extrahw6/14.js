const getUserEmails = users => {
    const usersEmails = users.map(user => user.email);
    return usersEmails;
};

//Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей(свойство email) из массива 
//объектов в параметре users.