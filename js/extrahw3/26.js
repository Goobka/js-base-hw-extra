//Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.

//function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  //console.log(title);
  //console.log(numberOfPages);
  // И так далее
//}

// ❌ Что такое 736? Что такое 10283? Что такое true?
//doStuffWithBook('Последнее королевство', 736, 10283, 8.38, true);
//Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.

//function doStuffWithBook(book) {
  // Делаем что-то со свойствами объекта
  //console.log(book.title);
  //console.log(book.numberOfPages);
  // И так далее
//}
//Тогда во время её вызова передаём один объект с необходимыми свойствами.

// ✅ Всё понятно
//doStuffWithBook({
  //title: 'Последнее королевство',
  //numberOfPages: 736,
  //downloads: 10283,
  //rating: 8.38,
  //public: true,
//});
//Ещё один плюс в том, что можно деструктуризировать объект в параметре book.

// Это можно сделать в теле функции.
//function doStuffWithBook(book) {
  //const { title, numberOfPages, downloads, rating, public } = book;
  //console.log(title);
  //console.log(numberOfPages);
  // И так далее
//}

// Или в сигнатуре (подписи), разницы нет.
//function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  //console.log(title);
  //console.log(numberOfPages);
  // И так далее
//}

const forecast = {
    today: { low: 10, high: 20 },
    tomorrow: { low: 20, high: 30 }
};

function calculateMeanTemperature(forecast) {
  
  const {
  today: { low: todayLow, high: todayHigh },
  tomorrow: { low: tomorrowLow, high: tomorrowHigh }
} = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
};

//Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.