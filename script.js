// before using async await

// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai')
//   }, 2000);
// });

// coba.then(() => console.log(coba));

// after using async await

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai')
      }, 2000);
    }
    else {
      reject('kelamaan');
    }
  });
}

// before using async await function
const coba = cobaPromise();
coba.then(coba => console.log(coba));
coba.catch(coba => console.log(coba));

// after async await
// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  }
  catch (err) {
    console.log(err);
  }
}

cobaAsync();