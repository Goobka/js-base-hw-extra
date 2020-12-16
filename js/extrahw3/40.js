const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
  },
};

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
