// Higher Order Function adalah function yang mengambil function didalamnya

// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// yang dipilih hanya Javascript Lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))

// menerapkan method chaining
// ambil durasi masing-masing video
  .map(item => item.dataset.duration)

// ubah durasi dari string menjadi float, ubah menit menjadi detik
  .map(waktu => {
    // 10:30 -> [10, 30] split
    // parseFloat -> ubah string menjadi float
    const parts = waktu.split(':').map(part=> parseFloat(part));
    return (parts[0] * 60) + parts[1];
  })

// jumlahkan semua detiknya
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jumlahVideo = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

const pJumlahVideo = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jumlahVideo} video`;