# belajar JS Async

### Apa itu Synchronous

secara default, proses javascript dieksekusi secara `Synchronous`, artinya baris selanjutnya akan di eksekusi jika baris sebelumnya sudah selesai di eksekusi.

### Apa itu Asynchronous

adalah cara kerja program di mana beberapa tugas dapat dieksekusi secara bersamaan tanpa harus menunggu tugas sebelumnya selesai.
program tidak akan terjebak dalam mode tunggu (blocking) saat menunggu tugas selesai sebelum melanjutkan ke tugas berikutnya.

### Callback

merupakan mekanisme yang digunakan untuk memanggil kembali kode program yang ada di dalam proses Asynchronous, biasa dibuat dalam bentuk function, dan function tersebut akan di eksekusi saat proses Asynchronous selesai.

### ~~Ajax~~

singkatan dari _Asynchronous javascript and XML_, dapat digunakan untuk mengambil data dari server setelah halaman web tampil, dapat mengirim data ke server secara Asynchronous di background.

tiap requests Ajax yang dilakukan, kita tidak bisa mengambil langsung response dari Ajax nya, karena proses-nya Asynchronous, maka harus ditunggu hingga proses-nya selesai baru kita bisa mendapatkan data-nya.

### Promise

promise merupakan sebuah proxy untuk sebuah nilai di masa depan yang belum diketahui, biasanya promise digunakan sebagai proxy untuk proses async,

**Promise State**

| state     | result                    |
| --------- | ------------------------- |
| pending   | `undefined`               |
| fullfield | `value` dari proses async |
| rejected  | `error`                   |

promise memiliki method yang bernama `then` yang bisa digunakan sebagai Callback ketika proses-nya sudah fullfield, jika menggunakan `then` kita bisa membuat chain method, sehingga tidak terjebak dengan Callback hell.

ketika promise bernilai rejected, promise memiliki method yang bernama `catch` yang biasanya digunakan untuk meng-handle error.

kadang-kadang kita berhadapan dengan beberapa proses async sekaligus, menggunakan promise satu persatu sangatlah susah / ribet.
`Promise.all` bisa digunakan untuk menggabungkan beberapa promise menjadi promise baru yang berisi data array dari hasil promise-nya.

### Fetch API

adalah api baru yang digunakan untuk melakukan proses ajax, tidak seperti ajax yang menggunakan Callback, kalau Fetch API secara default menggunakan promise.

menggunakan Fetch API

```javascript
fetch(url, config)
  .then(function () {
    // do something here
  })
  .then(function () {
    // do something here
  });
```

### Async Await

adalah fitur baru di JS yang digunakan untuk mempermudah pembuatan Promise, dengan menggunakan `async await`, kita bisa membuat kode Asynchronous tapi dengan gaya Synchronous.
`async` digunakan untuk menandakan bahwa function tersebut adalah Asynchronous, dan mengembalikan promise, `await` digunakan untuk mendapatkan value hasil dari proses function yang mengembalikan promise, `await` hanya bisa digunakan dalam `async` function.

### Web Worker

`web worker` adalah kemampuan yang digunakan untuk menjalankan proses di _thread_ yang berbeda dibanding dengan main _thread_. Keuntungan menggunakan `web worker` adalah jika terdapat proses yang membutuhkan waktu lama, web kita tidak akan freeze, karena proses yang dijalankan berbeda dengan main thread yang digunakan oleh ui web.

untuk membuat `web worker` cukup mudah

```javascript
// perlu membuat file javascript terpisah untuk web worker
const worker = new Worker("file-worker.js");
```

`web worker` adalah proses-nya `async`, dan untuk berkomunikasi dengan `web worker` perlu menggunakan `event listener`.
untuk mengirimkan data ke `web worker` atau _main thread_, bisa dengan menggunakan method `postMessage(data)`.

contoh `web worker` communication :

```javascript
const worker = new Worker("file.js");

worker.addEventListener("message", function (ev) {
  const data = ev.data;
});

// mengirimkan data ke web worker
worker.postMessage(message);
```

```javascript
// worker-file.js
addEventListener("message", function (ev) {
  const data = ev.data;

  // mengirimkan pesan ke main thread
  postMessage(message);
});
```
