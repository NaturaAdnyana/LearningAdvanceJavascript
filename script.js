// let add = function () {
//   let counter = 0;
//   // variabel counter disimpan didalam function, sehingga tidak terpengaruh oleh global
//   return function () {
//     return ++counter;
//   };
// }

// counter = 10;
// scope global mencoba mempengaruhi variabel counter

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// v v v v v v

// Immediately Invoked Function (IIFE)
let add = (function () {
  // function dibungkus kurung, sehingga menjadi Immediately Invoked Function
  let counter = 0;
  // variabel counter disimpan didalam function, sehingga tidak terpengaruh oleh global
  return function () {
    return ++counter;
  };
})();
// diakhir diisi kurung kosong

counter = 10;
// scope global mencoba mempengaruhi variabel counter

console.log(add());
console.log(add());