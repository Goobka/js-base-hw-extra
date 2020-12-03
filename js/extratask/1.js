function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки

  return password === ADMIN_PASSWORD
    ? 'Добро пожаловать!'
    : 'Доступ запрещен, неверный пароль!';

  // Пиши код выше этой строки
}

console.log(checkPassword("fjr"));