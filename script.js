// Destructuring Variables / Assignment

// Destructuring array
const perkenalan = ["Hallo", "nama", "saya", "Natura Adnyana"];
// normal items
// const [salam, satu, dua, nama] = perkenalan;
// skipping items
const [salam, , , nama] = perkenalan;
console.log(nama);

// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
// this is swap
[a, b] = [b, a]
console.log(a);
console.log(b);

// destructuring variables can be implemented on function
const coba = () => {
  return [3, 4];
}
// destructuring
const [c, d] = coba();
console.log(c);

// Rest parameter
const [e, ...values] = [5, 6, 7, 8, 9];
// ...values return new array
console.log(e);
console.log(values);

// destructuring object
const petDog = {
  namaAnjing: "Chika",
  umur: 20
}
const {namaAnjing, umur} = petDog;
console.log(namaAnjing);
// vvv can be simplified like this (without declare object)
({ namaKucing, warna } = {
  namaKucing: "Choco",
  warna: "coklat"
})
console.log(warna);
// vvv you can change variables name by using :
const myPhone = {
  phoneMerk: "Asus",
  phoneEdition: "Zenfone 3 Max"
}
const { phoneMerk: f, phoneEdition: g } = myPhone;
console.log(f);
// vvv you can put default variables
const myShirt = {
  shirtMerk: "Nike",
  shirtSize: "M",
  shirtColor: "White",
  shirtMaterial: "Cotton"
}
const { 
  shirtMerk, //normal
  shirtSize: size, //changed variable name
  shirtColor = "default-black", // added default value
  shirtMaterial: material = "default-hyget" //changed variable name & added default value
} = myShirt;
console.log(material);

// rest parameter (now with object)
const myCar = {
  carName: "Every",
  carEngine: "Matic",
  carColor: "Silver"
}
const { carName, ...carComponent } = myCar;
// ...carComponent will return new object
console.log(carComponent);

// you can take one of object and send it as parameter into a function
const softDrink = {
  id: 12,
  softDrinkName: 'Sprite',
  softDrinkVol: '390ml'
}
const getIdSoftDrink = ({ id }) => {
  return id;
}
console.log(getIdSoftDrink(softDrink));