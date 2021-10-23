// make hightlighted text
const nama = 'Natura Adnyana';
const umur = '20';
const email = 'natura@gmail.com'

const hightlight = (strings, ...values) => {
  // ...values adalah semua expression ${} yang ada di template literals
  return strings.reduce((result, str, i) => `${result}${str}<span class='hl'>${values[i] || ''}</span>`, '');
}

const str = hightlight`Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan email saya adalah ${email}.`;
console.log(str);

document.body.innerHTML = str;