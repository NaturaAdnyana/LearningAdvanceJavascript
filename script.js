// this function return function
function ucapanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
    // ${waktu} adalah closure, karena mengambil parameter dari luar function
  }
}

// function factories
let selamatPagi = ucapanSalam('pagi');
let selamatSiang = ucapanSalam('siang');
let selamatMalam = ucapanSalam('malam');

selamatPagi('Natura');
// Output : Halo Natura, selamat pagi, semoga harimu menyenangkan!

console.dir(selamatPagi);
// bisa dilihat didalam scope ada closure
