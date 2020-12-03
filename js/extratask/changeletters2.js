/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */
const changeCase = function (string) {
    const letters = string.split('');
    console.log(letters);
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
      console.log(isInLowerCase);
    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase('hgSrFT')); 
console.log(changeCase('LjuvGfr')); 
console.log(changeCase('HellO')); 
