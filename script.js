// Higher Order Function adalah function yang mengambil function didalamnya
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// jumlahkan seluruh elemen pada array
// reduce perlu 2 parameter
const newAngka = angka.reduce((accumulator, currentValue) => 
accumulator + currentValue, 0);
// nilai akhir defaultnya 0
console.log(newAngka);