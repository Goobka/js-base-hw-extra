const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
 
  getPotions() {
    return this.potions;
    },
  
  addPotion(newPotion) {
         this.potions.push({ name: potionName, price:  });
    },
  
    removePotion(potionName) {  
        for (const potion of this.potions) {
            if (potionName === potion.name) {
           this.potions.splice(this.potions.indexOf(potion),1)
       }
   }
    },
    
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
            }
        };
    }
};

//Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

//getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
//addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
//removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.