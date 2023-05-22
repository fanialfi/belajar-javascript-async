function doSomethingAsync(successCallback, errorCallback) {
  // simulasi jaringan
  setTimeout(() => {
    const isSuccess = Math.random() < 0.5; // menentukan proses berhasil atau gagal secara acak

    if (isSuccess) {
      successCallback("Berhasil melakukan sesuatu");
    } else {
      errorCallback("Gagal melakukan sesuatu");
    }
  }, 1000);
}

function onSuccess(message) {
  console.log(`Sukses : ${message}`);
}
function onError(message) {
  console.log(`Error : ${message}`);
}

doSomethingAsync(onSuccess, onError);
