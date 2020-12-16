class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

//Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.