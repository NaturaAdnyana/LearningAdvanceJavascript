// There is the easiest way to get data from api

// JANJI (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// ada aksi (then / catch)

// use fetch!
// fetch('http://www.omdbapi.com/?apikey=21cb464f&s=avengers')
  // .then(response => response.json())
  // .then(response => console.log(response));

// introduce promise
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve('Janji telah ditepati!')
  }
  else {
    reject('Ingkar janji');
  }
});

janji1
  .then(response => console.log('OK : ' + response))
  .catch(response => console.log('NOT OK : ' + response));

// another example with pending
let ditepati2 = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati2) {
    setTimeout(() => {
      resolve('Ditepati setelah beberapa waktu')
    }, 2000);
  }
  else {
    setTimeout(() => {
      resolve('Tidak ditepati setelah beberapa waktu')
    }, 2000);
  }
});

console.log('mulai');
// with pending status appear in console
// console.log(janji2.then(() => console.log(janji2)));
// with no pending status appear in console
janji2
  .finally(() => console.log('selesai menunggu'))
  .then(response => console.log('OK : ' + response))
  .catch(response => console.log('NOT OK : ' + response));
console.log('selesai');

// you know promise.all ?
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avenger',
      sutradara: 'Natura'
    }])
  }, 3000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Bandung',
      temp: 'Gianyar'
    }]);
  }, 2500);
});

// Don't do this
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Do this
Promise.all([film, cuaca])
  // this will combine 2 arrays
  // .then(response => console.log(response));

  // this will seperate 2 arrays
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })
