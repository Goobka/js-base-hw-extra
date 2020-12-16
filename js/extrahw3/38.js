const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};

//Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.