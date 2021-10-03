// Higher Order Function adalah function yang mengambil function didalamnya
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// method chaining adalah gabungan / rantai function-function yang tersambung

// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
  .map(a => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur); // 78

console.log(hasil);