function countProps(object) {

  let propCount = 0;
  const props = Object.keys(object);

  for (const key of props) {
    propCount += 1;
  }
  return propCount;

}

//Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.