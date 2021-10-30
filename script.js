// Callback
// Synchronous Callback

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('Masukan nama : ');
//   callback(nama);
// }

// tampilkanPesan(halo);

// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      }
      else if (xhr.status === 404) {
        error();
      }
    }
  }
  xhr.open('get', url);
  xhr.send();
}

console.log('start');

getDataMahasiswa('data/data.json', results => {
  // console.log(JSON.parse(results));
  const mhs = JSON.parse(results);
  mhs.forEach(m => console.log(m.nama));
}, () => {

})

console.log('end');
