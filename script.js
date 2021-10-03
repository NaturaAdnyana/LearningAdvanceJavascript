// Constructor Function

// v v v sebelum menjadi arrow function v v v
// const Mahasiswa = function () {
//   this.nama = 'Natura';
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }
// }
// const Natura = new Mahasiswa;


// v v v sesudah menjadi arrow function v v v

// arrow function tidak mengenal this, jadi hanya bisa diterapkan pada method
// jika dipaksa, maka scope arrow function akan mencari keluar ke global sehingga this. menjadi window.
const Mahasiswa = function () {
  this.nama = 'Natura';
  this.umur = 20;
  this.sayHello = () => {
    console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  }

  // Ini wajib menggunakan arrow function agar tidak hoisting
  setInterval(() => {
    console.log(this.umur++);
    // Karena arrow function tidak mengenal this, maka this.umur++ akan mencari keluar ke parentnya
  }, 5000);

}
const Natura = new Mahasiswa;