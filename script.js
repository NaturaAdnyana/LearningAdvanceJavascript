// Destructuring Function

function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}

// before
// const jumlah = kalkukasi(2, 3)[0]; //output 5
// const kali = kalkukasi(2, 3)[1]; //output 6

// after
const [jumlah, kurang, kali, bagi, sisaBagi = "tidak difunction"] = kalkulasi(2, 3);

console.log(jumlah);
console.log(kali);
console.log(sisaBagi);

// ===========================================================

// Destructuring function, but return object
function kalkulasiObjek(a, b) {
  return {
    tambahin: a + b,
    kurangin: a - b,
    kaliin: a * b,
    bagiin: a / b
  }
}

const { bagiin, kaliin, kurangin, tambahin } = kalkulasiObjek(2, 4);
// you can randomize sort of object

console.log(kurangin);

// =============================================

// before
function cetakMhs(mhs) {
  return `Halo, nama saya ${mhs.nama}, sata berumur ${mhs.umur} tahun.`
}
// after
function cetakPenduduk({ nama, umur, email: {primaryEmail} }) {
  // you can declare object inside object
  return `Atas nama ${nama}, berumur ${umur} tahun, email anda ${primaryEmail} telah dicek dan akan dipanggil FBI`
}

// object variable
const dataNatura = {
  nama: "Natura Adnyana",
  umur: "20",
  email: {
    primaryEmail: "natura@gmail.com",
    secondaryEmail: "natkun@gmail.com",
  }
}

console.log(cetakMhs(dataNatura));
console.log(cetakPenduduk(dataNatura));