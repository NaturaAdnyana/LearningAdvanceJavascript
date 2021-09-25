// Object Literal
// let mahasiswa1 = {
//   nama: 'Natura',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   }
// }
// let mahasiswa2 = {
//   nama: 'Budi',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   }
// }

// tes on console
// mahasiswa1
// mahasiswa1.makan(3)
// mahasiswa1

// ======================================================

// Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan!`);
//   }

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   }

//   return mahasiswa;
// }

// let Natura = Mahasiswa('Natura', 10);
// let Budi = Mahasiswa('Budi', 20);

// tes on console
// Natura
// Natura.makan(3)
// Natura

// ======================================================

// Constructor Function
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  }

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  }
}

// keyword new
let Natura = new Mahasiswa('Natura', 10);

// tes on console
// Natura
// Natura.main(5)
// Natura