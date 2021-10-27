// Spread Operator
// Memecah iterables menjadi single element

// 1. for String
const me = "Natura";
console.log(...me);

// 2. for Array
const warga = ['Natura', 'Ntah', 'Siapa'];
console.log(...warga);

// =====================================================================

// You can combine 2 array
const mhs = ['Natura', 'Ngurah', 'Marcell'];
const dosen = ['Bapak', 'Ibu', 'Killer'];

// before use spread operator
const wargaKampus1 = mhs.concat(dosen);

// after use spread operator (even we can put new value in middle of it)
const wargaKampus2 = [...mhs, 'Anji', ...dosen];

console.log(wargaKampus2)

// ===============================================================
// You can copying into new variable
const myDog = ['Chika', 'Poko', 'Mochi'];

const naturasDog = myDog; // ❌ don't do this 
const asrisDog = [...myDog]; // 💯 do this

naturasDog[0] = 'Peko'; // myDog will be change too
asrisDog[0] = 'Pao'; // myDog will not change

console.log(`${myDog} (My Dog)`);
console.log(`${naturasDog} (Natura's Dog)`);
console.log(`${asrisDog} (Asri's Dog)`);

// ===============================================================
// What if data is from nodeList?
const liMhs = document.querySelectorAll('li');

// before use spread operator
const arrayMhs = [];
for (let i = 0; i < liMhs.length; i++) {
  arrayMhs.push(liMhs[i].textContent);  
}

// after use spread operator
const arraySpreadMhs = [...liMhs].map(m => m.textContent);

console.log(arrayMhs);
console.log(arraySpreadMhs);