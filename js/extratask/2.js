/*
 * Псевдомассив arguments и Array.from и ...
 */



const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

 console.log(add(1, 2, 3));
 console.log(add(1, 2, 4, 5, 6));
