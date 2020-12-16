function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const item of numbers) {
    const number = item;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}
