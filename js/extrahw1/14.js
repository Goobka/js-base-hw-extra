function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  
  const isMatch = SAVED_PASSWORD === password;
  return isMatch;
}
console.log(isValidPassword("mangodab3st"));

//Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки 
//должно быть true, если значения совпадают, и false, если нет.