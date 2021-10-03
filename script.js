const box = document.querySelector('.box');
box.addEventListener('click', function () {
  // function ada event tidak bisa diubah ke arrow
  console.log(this);

  let satu = 'size';
  let dua = 'caption';

  // untuk menukar alur toggle
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  // toggle class size
  this.classList.toggle(satu);

  // toggle class caption
  // function pada setTimeout akan hoisting, sehingga this yang ditangkap adalah global/window
  // setTimeout(function () {
  //   this.classList.toggle('caption');
  //   console.log(this);
  // }, 600);

  //  v v v solusinya adalah dengan menggunakan arrow function v v v

  setTimeout(() => {
    // setTimeout akan hoisting, sehingga this yang ditangkap adalah global/window
    this.classList.toggle(dua);
    console.log(this);
  }, 600);
})