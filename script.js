// === Jika sama sekali tidak punya parameter ===
const tampilUcapan = () => `Hello World`;
console.log(tampilUcapan());


// === Jika parameter cuma 1 ===
// const tampilNama = (nama) => { return `Halo, $(nama)`; }
// console.log('Natura Adnyana');

// v v v Bahkan bisa lebih ringkas v v v

const tampilNama = nama => `Halo, $(nama)`;
console.log('Natura Adnyana');


// === Jika parameter lebih dari 1 ===
const tampilSalam = (nama, waktu) => {
  return `Selamat ${waktu}, ${nama}`;
}
console.log(tampilSalam('Natura', 'Siang'));


// === Contoh arrow function yang lebih rumit ===
let mahasiswa = ['Natura', 'Krisna', 'Deta', 'Astawa'];

// v v v sebelum jadi arrow function (function expression) v v v
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// v v v sesudah menjadi arrow function v v v
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// v v v jika ingin mengembalikan objek v v v
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
console.table(jumlahHuruf);