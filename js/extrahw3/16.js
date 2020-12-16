function countTotalSalary(salaries) {
  let totalSalary = 0;

  const salariesKeys = Object.keys(salaries);
  for (const key of salariesKeys) {
    totalSalary += salaries[key];
  }
  return totalSalary;
}

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.