function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;

    //for (let i = 0; i < orderedItems.length; i += 1) {
     //   totalPrice += orderedItems[i];
    //}
    orderedItems.forEach(item => totalPrice += item);
    return totalPrice;
}


//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.