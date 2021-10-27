// 1. Array is iterable
const mhs = ["Natura", "siapa", "gatau"];
for (const m of mhs) {
  console.log(m);
}

// 2. String also iterable
const nama = "Natura";
for (const n of nama) {
  console.log(n);
}

// 3. For..of can't get each index in array, it need .entries method
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}
// vvv but if use forEach, it's more easy vvv
mhs.forEach((m, i) => {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`)
})

// 4. NodeList is also iterable
const liNama = document.querySelectorAll(".nama");
// before use for..of (forEach)
liNama.forEach(n => console.log(n.textContent));
// after use for..of
for (const n of liNama) {
  console.log(n.innerHTML);
}

// 5. Arguments also iterable
function jumlahkanAngka() {
  let jumlah = 0;
  for (const a of arguments) {
      jumlah += a
  }
  return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5))

// 6. BUT, object is not iterable, so we can use FOR..IN
const warga =  {
  nama: 'Natura',
  umur: 20,
  email: 'natura538@gmail.com'
} 

for (const w in warga) {
  console.log(warga[w]);
}