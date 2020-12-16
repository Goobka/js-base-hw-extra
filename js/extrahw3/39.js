const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },
};

//Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
