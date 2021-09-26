// Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur!`;
// }

// keyword new
// let Natura = new Mahasiswa('Natura', 10);

// tes on console
// Natura
// Natura.main(5)
// Natura

// ===================================================

// Class was made from construction function with lot of prototype

class Mahasiswa {
  // property
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  // method
  makan (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }
  main (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }
  tidur (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let Natura = new Mahasiswa('Natura', 10);