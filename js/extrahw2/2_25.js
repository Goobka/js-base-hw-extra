function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
    let newArray = [];
    for (let i = 0; i < array1.length; i += 1) {
      if (array2.includes(array1[i])) {
        newArray.push(array1[i]);
      }
    }
    return newArray;
  // Пиши код выше этой строки
}
getCommonElements([1, 2, 3], [2, 4]) // возвращает [2].
getCommonElements([1, 2, 3], [2, 1, 17, 19]) // возвращает [1, 2].
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // возвращает [12, 27, 3].
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // возвращает [10, 30, 40].