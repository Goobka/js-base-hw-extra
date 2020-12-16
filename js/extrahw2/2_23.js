function filterArray(numbers, value) {
  const array = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      array.push(numbers[i]);
    }
  }
  return array;
}
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).