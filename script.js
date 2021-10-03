// Higher Order Function adalah function yang mengambil function didalamnya
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// v v v Sebelum menggunakan filter v v v

// const angkaLebihDariTiga = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     angkaLebihDariTiga.push(angka[i]);
//   }  
// }
// console.log(angkaLebihDariTiga);


// v v v Setelah menggunakan filter v v v

// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);