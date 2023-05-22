# belajar JS Async

### Apa itu Synchronous

secara default, proses javascript dieksekusi secara `Synchronous`, artinya baris selanjutnya akan di eksekusi jika baris sebelumnya sudah selesai di eksekusi.

### Apa itu Asynchronous

adalah cara kerja program di mana beberapa tugas dapat dieksekusi secara bersamaan tanpa harus menunggu tugas sebelumnya selesai.
program tidak akan terjebak dalam mode tunggu (blocking) saat menunggu tugas selesai sebelum melanjutkan ke tugas berikutnya.

### Callback

merupakan mekanisme yang digunakan untuk memanggil kembali kode program yang ada di dalam proses Asynchronous, biasa dibuat dalam bentuk function, dan function tersebut akan di eksekusi saat proses Asynchronous selesai.

### Ajax

singkatan dari _Asynchronous javascript and XML_, dapat digunakan untuk mengambil data dari server setelah halaman web tampil, dapat mengirim data ke server secara Asynchronous di background.

tiap requests Ajax yang dilakukan, kita tidak bisa mengambil langsung response dari Ajax nya, karena proses-nya Asynchronous, maka harus ditunggu hingga proses-nya selesai baru kita bisa mendapatkan data-nya.
