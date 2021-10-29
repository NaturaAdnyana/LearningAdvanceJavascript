// Rest Parameter

function myFunc(a, b, ...myArgs) {
  return `a = ${a}, b = ${b}, the rest = ${myArgs}`;
  // myArgc will return array
}

console.log(myFunc(1,2,3,4,5));

// ==========================================================

// So we can sum the parameters really easy

function jumlahAngka(...angka) {
  return angka.reduce((a, b) => a + b);
}

console.log("The total is " + jumlahAngka(1,2,3,4,5));

// ==========================================================

// Its very useful for array destructuring too

const kelompok1 = ['Natura', 'Si Wakil', 'Kang Makan', 'Kang Gosip', 'Si Males'];
const [ketua, wakil, ...anggota] = kelompok1;

console.log("Para Beban : " + anggota);

// ==========================================================

// It's also works for object destruction

const projectTeam = {
  pm: "Natura",
  fe1: "Deta",
  fe2: "Astawa",
  be1: "Doni",
  ux: "Arya",
  do: "Krisna"
}

const { pm, ...myTeam } = projectTeam;
console.table(myTeam);

// ==========================================================

// We also can filter like this
function filterBy(tipe, ...data) {
  return data.filter(d => typeof d === tipe);
}

console.log(filterBy('number', 1, 87, 'Natura', false, 12, true, 'Bali'));