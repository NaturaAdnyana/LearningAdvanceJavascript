// I didn't know, it can be use for Embedded Expressions
const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// can be use for loop data
const mhs = [
  {
    nama: 'Natura Adnyana',
    email: 'natura@gmail.com'
  },
  {
    nama: 'Ntah Siapa',
    email: 'siapa@gmail.com'
  },
  {
    nama: 'Orang Gakenal',
    email: 'gakenal@gmail.com'
  }
];

const el = `
  <div class="mhs">
    ${mhs.map(m => `
      <ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
      </ul>
    `).join('')}
  </div>
`;
// add 'join method' so comma will not appear while mhs loop on HTML

document.body.innerHTML = el;

// ========================================

// condisional ternary
// if statement

const lagu = {
  judul: 'Tetap dalam jiwa',
  penyanyi: 'Isyana Saraswati',
  feat: 'jika ada feat'
}

const el2 = `
  <div class="lagu">
    <ul>
      <li>${lagu.penyanyi}</li>
      <li>
        ${lagu.judul}
        ${lagu.feat ? `(feat. ${lagu.feat})` : ''}
      </li>
    </ul>
  </div>
`;

document.body.innerHTML = el2;

// ===================================
// Nested
// HTML fragment bersarang

const dataMhs = {
  nama: 'Natura Adnyana',
  semester: 5,
  mataKuliah: [
    'Web Framework',
    'Desain Web',
    'Objek Orientasi Analisis dan Desain',
    'Tata Kelola dan Audit'
  ]
};

const cetakMataKuliah = (mataKuliah) => {
  return `
    <ol>
      ${mataKuliah.map(mk => `
        <li>
          ${mk}
        </li>
      `).join('')}
    </ol>
  `
  // ada join function untuk menghilangkan tanda koma setiap looping objek
}

const el3 = `
  <div class="dataMhs">
    <h2>${dataMhs.nama}</h2>
    <span class="semester">Semester : ${dataMhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(dataMhs.mataKuliah)}
  </div>
`

document.body.innerHTML = el3;