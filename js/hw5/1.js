// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.

// Write code under this line
const Account = function (login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () { 
  const key = this.login;
  const key2 = this.email;
  let result = `${key} : ${this[key]}, ${key2}: ${this[key2]}`
}
// Account.prototype.getInfo = function () {
//   let result = "";
//   const entries = Object.entries(this);
//   result = `${entries[0][0]} : ${entries[0][1]}, ${entries[1][0]}: ${entries[1][1]}`
//   return result;
// };

console.log(typeof Account.prototype.getInfo);
//  'function'

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
//  'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
//  'login : Poly, email: poly@mail.com'


 // const keys = Object.keys(this);
  // let result = '';
  // for (const key of keys) {
  //     result += `${key} : ${this[key]} `;
  //     console.log();
  // }

// let result = "";
// const entries = Object.entries(this);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   result += `${key} : ${value} `
// }

// Account.prototype.getInfo = function () {
//   let result = this;
//   return result;
// };