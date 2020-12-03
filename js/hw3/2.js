const countProps = function (obj) {
    'use strict';
    // Write code under this line
    const keys = Object.keys(obj);
    return keys.length;

    //return Object.keys(obj).length;
};
console.log(countProps({ a: 1, b: 1 }));
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться