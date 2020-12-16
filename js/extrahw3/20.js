const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  
  let totalPrice = 0;
  for (const product of products) {
    const productKeys = Object.keys(product);
    for (const key of productKeys) {
      if (product[key] === productName) {
        totalPrice = product.price * product.quantity;
        
      }
    }    
  }
    return totalPrice;
}

console.log(calculateTotalPrice("Радар"));

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.